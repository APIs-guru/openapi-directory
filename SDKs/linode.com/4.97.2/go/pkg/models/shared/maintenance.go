package shared

import (
	"time"
)

type MaintenanceEntity struct {
	ID    *float64 `json:"id"`
	Label *string  `json:"label"`
	Type  *string  `json:"type"`
	URL   *string  `json:"url"`
}

type MaintenanceStatusEnum string

const (
	MaintenanceStatusEnumPending MaintenanceStatusEnum = "pending"
	MaintenanceStatusEnumStarted MaintenanceStatusEnum = "started"
)

type MaintenanceTypeEnum string

const (
	MaintenanceTypeEnumReboot        MaintenanceTypeEnum = "reboot"
	MaintenanceTypeEnumColdMigration MaintenanceTypeEnum = "cold_migration"
	MaintenanceTypeEnumLiveMigration MaintenanceTypeEnum = "live_migration"
)

type Maintenance struct {
	Entity *MaintenanceEntity     `json:"entity"`
	Reason *string                `json:"reason"`
	Status *MaintenanceStatusEnum `json:"status"`
	Type   *MaintenanceTypeEnum   `json:"type"`
	When   *time.Time             `json:"when"`
}
