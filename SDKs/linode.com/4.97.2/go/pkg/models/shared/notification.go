package shared

import (
"time")

type NotificationEntity struct {
    ID *int64 `json:"id,omitempty"`
    Label *string `json:"label,omitempty"`
    Type *string `json:"type,omitempty"`
    URL *string `json:"url,omitempty"`
    
}


type NotificationSeverityEnum string

const (
    NotificationSeverityEnumMinor NotificationSeverityEnum = "minor"
NotificationSeverityEnumMajor NotificationSeverityEnum = "major"
NotificationSeverityEnumCritical NotificationSeverityEnum = "critical"
)



type NotificationTypeEnum string

const (
    NotificationTypeEnumMigrationScheduled NotificationTypeEnum = "migration_scheduled"
NotificationTypeEnumMigrationImminent NotificationTypeEnum = "migration_imminent"
NotificationTypeEnumMigrationPending NotificationTypeEnum = "migration_pending"
NotificationTypeEnumRebootScheduled NotificationTypeEnum = "reboot_scheduled"
NotificationTypeEnumOutage NotificationTypeEnum = "outage"
NotificationTypeEnumPaymentDue NotificationTypeEnum = "payment_due"
NotificationTypeEnumTicketImportant NotificationTypeEnum = "ticket_important"
NotificationTypeEnumTicketAbuse NotificationTypeEnum = "ticket_abuse"
NotificationTypeEnumNotice NotificationTypeEnum = "notice"
NotificationTypeEnumMaintenance NotificationTypeEnum = "maintenance"
NotificationTypeEnumPromotion NotificationTypeEnum = "promotion"
)


type Notification struct {
    Body *string `json:"body,omitempty"`
    Entity *NotificationEntity `json:"entity,omitempty"`
    Label *string `json:"label,omitempty"`
    Message *string `json:"message,omitempty"`
    Severity *NotificationSeverityEnum `json:"severity,omitempty"`
    Type *NotificationTypeEnum `json:"type,omitempty"`
    Until *time.Time `json:"until,omitempty"`
    When *time.Time `json:"when,omitempty"`
    
}

