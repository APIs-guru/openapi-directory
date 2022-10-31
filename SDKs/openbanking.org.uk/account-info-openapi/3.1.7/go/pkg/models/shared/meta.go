package shared

import (
"time")

type Meta struct {
    FirstAvailableDateTime *time.Time `json:"FirstAvailableDateTime,omitempty"`
    LastAvailableDateTime *time.Time `json:"LastAvailableDateTime,omitempty"`
    TotalPages *int32 `json:"TotalPages,omitempty"`
    
}

