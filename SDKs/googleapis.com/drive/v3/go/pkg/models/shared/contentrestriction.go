package shared

import (
	"time"
)

type ContentRestriction struct {
	ReadOnly        *bool      `json:"readOnly"`
	Reason          *string    `json:"reason"`
	RestrictingUser *User      `json:"restrictingUser"`
	RestrictionTime *time.Time `json:"restrictionTime"`
	Type            *string    `json:"type"`
}
