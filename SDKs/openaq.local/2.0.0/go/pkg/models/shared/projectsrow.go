package shared

import (
"time")

type ProjectsRow struct {
    Bbox []float64 `json:"bbox,omitempty"`
    Countries []string `json:"countries,omitempty"`
    Entity *string `json:"entity,omitempty"`
    FirstUpdated time.Time `json:"firstUpdated"`
    ID int64 `json:"id"`
    IsAnalysis *bool `json:"isAnalysis,omitempty"`
    IsMobile *bool `json:"isMobile,omitempty"`
    LastUpdated time.Time `json:"lastUpdated"`
    LocationIds []int64 `json:"locationIds"`
    Locations int64 `json:"locations"`
    Measurements int64 `json:"measurements"`
    Name string `json:"name"`
    Parameters []ProjectParameterDetails `json:"parameters"`
    SensorType *string `json:"sensorType,omitempty"`
    Sources []interface{} `json:"sources,omitempty"`
    Subtitle string `json:"subtitle"`
    
}

