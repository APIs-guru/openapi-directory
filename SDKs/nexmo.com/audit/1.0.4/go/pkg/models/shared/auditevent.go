package shared

import (
	"time"
)

type AuditEventSourceEnum string

const (
	AuditEventSourceEnumCd     AuditEventSourceEnum = "CD"
	AuditEventSourceEnumDevapi AuditEventSourceEnum = "DEVAPI"
)

type AuditEventSourceDescriptionEnum string

const (
	AuditEventSourceDescriptionEnumCustomerDashboard AuditEventSourceDescriptionEnum = "Customer Dashboard"
	AuditEventSourceDescriptionEnumDeveloperAPI      AuditEventSourceDescriptionEnum = "Developer API"
)

type AuditEvent struct {
	Links                *EventLink                       `json:"_links"`
	AccountID            *string                          `json:"account_id"`
	Context              map[string]interface{}           `json:"context"`
	CreatedAt            *time.Time                       `json:"created_at"`
	EventType            *EventTypesEnum                  `json:"event_type"`
	EventTypeDescription *string                          `json:"event_type_description"`
	ID                   *string                          `json:"id"`
	Source               *AuditEventSourceEnum            `json:"source"`
	SourceCountry        *string                          `json:"source_country"`
	SourceDescription    *AuditEventSourceDescriptionEnum `json:"source_description"`
	SourceIP             *string                          `json:"source_ip"`
	UserEmail            *string                          `json:"user_email"`
	UserID               *int64                           `json:"user_id"`
}
