package shared

import (
	"time"
)

type QuickConnectResult struct {
	Authenticated  *bool      `json:"Authenticated"`
	Authentication *string    `json:"Authentication"`
	Code           *string    `json:"Code"`
	DateAdded      *time.Time `json:"DateAdded"`
	Error          *string    `json:"Error"`
	Secret         *string    `json:"Secret"`
}
