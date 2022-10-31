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
	Links                *EventLink                       `json:"_links,omitempty"`
	AccountID            *string                          `json:"account_id,omitempty"`
	Context              map[string]interface{}           `json:"context,omitempty"`
	CreatedAt            *time.Time                       `json:"created_at,omitempty"`
	EventType            *EventTypesEnum                  `json:"event_type,omitempty"`
	EventTypeDescription *string                          `json:"event_type_description,omitempty"`
	ID                   *string                          `json:"id,omitempty"`
	Source               *AuditEventSourceEnum            `json:"source,omitempty"`
	SourceCountry        *string                          `json:"source_country,omitempty"`
	SourceDescription    *AuditEventSourceDescriptionEnum `json:"source_description,omitempty"`
	SourceIP             *string                          `json:"source_ip,omitempty"`
	UserEmail            *string                          `json:"user_email,omitempty"`
	UserID               *int64                           `json:"user_id,omitempty"`
}
