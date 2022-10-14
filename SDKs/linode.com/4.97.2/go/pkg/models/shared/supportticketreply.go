package shared

import (
	"time"
)

type SupportTicketReply struct {
	Created     *time.Time `json:"created,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	Description *string    `json:"description,omitempty"`
	FromLinode  *bool      `json:"from_linode,omitempty"`
	GravatarID  *string    `json:"gravatar_id,omitempty"`
	ID          *int64     `json:"id,omitempty"`
}
