package shared

import (
	"time"
)

// MaintenanceEntity
// The entity being affected by maintenance.
type MaintenanceEntity struct {
	ID    *float64 `json:"id,omitempty"`
	Label *string  `json:"label,omitempty"`
	Type  *string  `json:"type,omitempty"`
	URL   *string  `json:"url,omitempty"`
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

// Maintenance
// Information about maintenance affecting an entity.
type Maintenance struct {
	Entity *MaintenanceEntity     `json:"entity,omitempty"`
	Reason *string                `json:"reason,omitempty"`
	Status *MaintenanceStatusEnum `json:"status,omitempty"`
	Type   *MaintenanceTypeEnum   `json:"type,omitempty"`
	When   *time.Time             `json:"when,omitempty"`
}
