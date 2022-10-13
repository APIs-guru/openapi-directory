package shared

import (
	"time"
)

type SupportTicketReply struct {
	Created     *time.Time `json:"created"`
	CreatedBy   *string    `json:"created_by"`
	Description *string    `json:"description"`
	FromLinode  *bool      `json:"from_linode"`
	GravatarID  *string    `json:"gravatar_id"`
	ID          *int64     `json:"id"`
}
