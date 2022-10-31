package shared

import (
"time")

type ContentRestriction struct {
    ReadOnly *bool `json:"readOnly,omitempty"`
    Reason *string `json:"reason,omitempty"`
    RestrictingUser *User `json:"restrictingUser,omitempty"`
    RestrictionTime *time.Time `json:"restrictionTime,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

