package shared

import (
"time")

type ManagedContactPhone struct {
    Primary *string `json:"primary,omitempty"`
    Secondary *string `json:"secondary,omitempty"`
    
}

type ManagedContact struct {
    Email *string `json:"email,omitempty"`
    Group *string `json:"group,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Phone *ManagedContactPhone `json:"phone,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    
}

