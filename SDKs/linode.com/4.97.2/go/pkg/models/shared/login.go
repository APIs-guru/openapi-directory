package shared

import (
	"time"
)

// Login
// An object representing a previous successful login for a User.
type Login struct {
	Datetime   *time.Time `json:"datetime,omitempty"`
	ID         *int64     `json:"id,omitempty"`
	IP         *string    `json:"ip,omitempty"`
	Restricted *bool      `json:"restricted,omitempty"`
	Username   *string    `json:"username,omitempty"`
}
