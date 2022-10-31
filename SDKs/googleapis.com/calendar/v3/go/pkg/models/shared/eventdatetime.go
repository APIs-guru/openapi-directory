package shared

import (
"time")

type EventDateTime struct {
    Date *time.Time `json:"date,omitempty"`
    DateTime *time.Time `json:"dateTime,omitempty"`
    TimeZone *string `json:"timeZone,omitempty"`
    
}

