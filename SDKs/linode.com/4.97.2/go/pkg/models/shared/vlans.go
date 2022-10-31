package shared

import (
"time")

type Vlans struct {
    Created *time.Time `json:"created,omitempty"`
    Label *string `json:"label,omitempty"`
    Linodes []int64 `json:"linodes,omitempty"`
    Region *string `json:"region,omitempty"`
    
}

