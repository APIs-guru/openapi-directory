package shared

import (
	"time"
)

type SupportTicketEntity struct {
	ID    *int64  `json:"id"`
	Label *string `json:"label"`
	Type  *string `json:"type"`
	URL   *string `json:"url"`
}

type SupportTicketStatusEnum string

const (
	SupportTicketStatusEnumClosed SupportTicketStatusEnum = "closed"
	SupportTicketStatusEnumNew    SupportTicketStatusEnum = "new"
	SupportTicketStatusEnumOpen   SupportTicketStatusEnum = "open"
)

type SupportTicket struct {
	Attachments []string                 `json:"attachments"`
	Closable    *bool                    `json:"closable"`
	Closed      *time.Time               `json:"closed"`
	Description *string                  `json:"description"`
	Entity      *SupportTicketEntity     `json:"entity"`
	GravatarID  *string                  `json:"gravatar_id"`
	ID          *int64                   `json:"id"`
	Opened      *time.Time               `json:"opened"`
	OpenedBy    *string                  `json:"opened_by"`
	Status      *SupportTicketStatusEnum `json:"status"`
	Summary     *string                  `json:"summary"`
	Updated     *time.Time               `json:"updated"`
	UpdatedBy   *string                  `json:"updated_by"`
}
