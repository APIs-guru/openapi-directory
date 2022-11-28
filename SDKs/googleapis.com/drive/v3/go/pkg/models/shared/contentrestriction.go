package shared

import (
	"time"
)

// ContentRestriction
// A restriction for accessing the content of the file.
type ContentRestriction struct {
	ReadOnly        *bool      `json:"readOnly,omitempty"`
	Reason          *string    `json:"reason,omitempty"`
	RestrictingUser *User      `json:"restrictingUser,omitempty"`
	RestrictionTime *time.Time `json:"restrictionTime,omitempty"`
	Type            *string    `json:"type,omitempty"`
}
