package shared

import (
"time")

type GuideInfo struct {
    EndDate *time.Time `json:"EndDate,omitempty"`
    StartDate *time.Time `json:"StartDate,omitempty"`
    
}

