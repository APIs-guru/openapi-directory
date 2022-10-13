package shared

import (
	"time"
)

type NotificationEntity struct {
	ID    *int64  `json:"id"`
	Label *string `json:"label"`
	Type  *string `json:"type"`
	URL   *string `json:"url"`
}

type NotificationSeverityEnum string

const (
	NotificationSeverityEnumMinor    NotificationSeverityEnum = "minor"
	NotificationSeverityEnumMajor    NotificationSeverityEnum = "major"
	NotificationSeverityEnumCritical NotificationSeverityEnum = "critical"
)

type NotificationTypeEnum string

const (
	NotificationTypeEnumMigrationScheduled NotificationTypeEnum = "migration_scheduled"
	NotificationTypeEnumMigrationImminent  NotificationTypeEnum = "migration_imminent"
	NotificationTypeEnumMigrationPending   NotificationTypeEnum = "migration_pending"
	NotificationTypeEnumRebootScheduled    NotificationTypeEnum = "reboot_scheduled"
	NotificationTypeEnumOutage             NotificationTypeEnum = "outage"
	NotificationTypeEnumPaymentDue         NotificationTypeEnum = "payment_due"
	NotificationTypeEnumTicketImportant    NotificationTypeEnum = "ticket_important"
	NotificationTypeEnumTicketAbuse        NotificationTypeEnum = "ticket_abuse"
	NotificationTypeEnumNotice             NotificationTypeEnum = "notice"
	NotificationTypeEnumMaintenance        NotificationTypeEnum = "maintenance"
	NotificationTypeEnumPromotion          NotificationTypeEnum = "promotion"
)

type Notification struct {
	Body     *string                   `json:"body"`
	Entity   *NotificationEntity       `json:"entity"`
	Label    *string                   `json:"label"`
	Message  *string                   `json:"message"`
	Severity *NotificationSeverityEnum `json:"severity"`
	Type     *NotificationTypeEnum     `json:"type"`
	Until    *time.Time                `json:"until"`
	When     *time.Time                `json:"when"`
}
