package shared

import (
	"time"
)

// QuickConnectResult
// Stores the result of an incoming quick connect request.
type QuickConnectResult struct {
	Authenticated  *bool      `json:"Authenticated,omitempty"`
	Authentication *string    `json:"Authentication,omitempty"`
	Code           *string    `json:"Code,omitempty"`
	DateAdded      *time.Time `json:"DateAdded,omitempty"`
	Error          *string    `json:"Error,omitempty"`
	Secret         *string    `json:"Secret,omitempty"`
}
