package shared

import (
"time")

type Rate struct {
    Symbol *string `json:"symbol,omitempty"`
    Timestamp *time.Time `json:"timestamp,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

