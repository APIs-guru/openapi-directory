package shared

import (
"time")

type CitiesRow struct {
    City string `json:"city"`
    Count int64 `json:"count"`
    Country *string `json:"country,omitempty"`
    FirstUpdated time.Time `json:"firstUpdated"`
    LastUpdated time.Time `json:"lastUpdated"`
    Locations int64 `json:"locations"`
    Parameters []string `json:"parameters"`
    
}

