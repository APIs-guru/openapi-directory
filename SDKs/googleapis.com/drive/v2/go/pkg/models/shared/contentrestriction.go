package shared

import (
	"time"
)

type ContentRestriction struct {
	ReadOnly        *bool      `json:"readOnly,omitempty"`
	Reason          *string    `json:"reason,omitempty"`
	RestrictingUser *User      `json:"restrictingUser,omitempty"`
	RestrictionDate *time.Time `json:"restrictionDate,omitempty"`
	Type            *string    `json:"type,omitempty"`
}
