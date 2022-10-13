package shared

import (
	"time"
)

type ProjectParameterDetails struct {
	Average      float64   `json:"average"`
	Count        int64     `json:"count"`
	DisplayName  *string   `json:"displayName"`
	FirstUpdated time.Time `json:"firstUpdated"`
	LastUpdated  time.Time `json:"lastUpdated"`
	LastValue    float64   `json:"lastValue"`
	Locations    int64     `json:"locations"`
	Parameter    string    `json:"parameter"`
	ParameterID  int64     `json:"parameterId"`
	Unit         string    `json:"unit"`
}
