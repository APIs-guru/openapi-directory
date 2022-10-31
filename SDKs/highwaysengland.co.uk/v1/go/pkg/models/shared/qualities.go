package shared

import (
"time")

type Qualities struct {
    Date *time.Time `json:"Date,omitempty"`
    Quality *int32 `json:"Quality,omitempty"`
    
}

