package shared

import (
	"time"
)

type ContentRestriction struct {
	ReadOnly        *bool      `json:"readOnly"`
	Reason          *string    `json:"reason"`
	RestrictingUser *User      `json:"restrictingUser"`
	RestrictionDate *time.Time `json:"restrictionDate"`
	Type            *string    `json:"type"`
}
