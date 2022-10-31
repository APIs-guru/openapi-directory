package shared

import (
	"time"
)

type SupportTicketEntity struct {
	ID    *int64  `json:"id,omitempty"`
	Label *string `json:"label,omitempty"`
	Type  *string `json:"type,omitempty"`
	URL   *string `json:"url,omitempty"`
}

type SupportTicketStatusEnum string

const (
	SupportTicketStatusEnumClosed SupportTicketStatusEnum = "closed"
	SupportTicketStatusEnumNew    SupportTicketStatusEnum = "new"
	SupportTicketStatusEnumOpen   SupportTicketStatusEnum = "open"
)

type SupportTicket struct {
	Attachments []string                 `json:"attachments,omitempty"`
	Closable    *bool                    `json:"closable,omitempty"`
	Closed      *time.Time               `json:"closed,omitempty"`
	Description *string                  `json:"description,omitempty"`
	Entity      *SupportTicketEntity     `json:"entity,omitempty"`
	GravatarID  *string                  `json:"gravatar_id,omitempty"`
	ID          *int64                   `json:"id,omitempty"`
	Opened      *time.Time               `json:"opened,omitempty"`
	OpenedBy    *string                  `json:"opened_by,omitempty"`
	Status      *SupportTicketStatusEnum `json:"status,omitempty"`
	Summary     *string                  `json:"summary,omitempty"`
	Updated     *time.Time               `json:"updated,omitempty"`
	UpdatedBy   *string                  `json:"updated_by,omitempty"`
}
