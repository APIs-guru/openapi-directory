package shared

import (
"time")

type Payment struct {
    Date *time.Time `json:"date,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Usd *int64 `json:"usd,omitempty"`
    
}

