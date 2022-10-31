package shared

import (
"time")

type Interval struct {
    Change *float64 `json:"change,omitempty"`
    ChangePercent *float64 `json:"changePercent,omitempty"`
    End *time.Time `json:"end,omitempty"`
    High *float64 `json:"high,omitempty"`
    Last *float64 `json:"last,omitempty"`
    Low *float64 `json:"low,omitempty"`
    Open *float64 `json:"open,omitempty"`
    Start *time.Time `json:"start,omitempty"`
    
}

