package shared

import (
	"time"
)

// SupportTicketReply
// An object representing a reply to a Support Ticket.
type SupportTicketReply struct {
	Created     *time.Time `json:"created,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	Description *string    `json:"description,omitempty"`
	FromLinode  *bool      `json:"from_linode,omitempty"`
	GravatarID  *string    `json:"gravatar_id,omitempty"`
	ID          *int64     `json:"id,omitempty"`
}
