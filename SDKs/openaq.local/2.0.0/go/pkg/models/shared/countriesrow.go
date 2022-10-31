package shared

import (
"time")

type CountriesRow struct {
    Cities int64 `json:"cities"`
    Code string `json:"code"`
    Count int64 `json:"count"`
    FirstUpdated time.Time `json:"firstUpdated"`
    LastUpdated time.Time `json:"lastUpdated"`
    Locations int64 `json:"locations"`
    Name string `json:"name"`
    Parameters []string `json:"parameters"`
    Sources int64 `json:"sources"`
    
}

