package shared

import (
	"time"
)

type ProjectsRow struct {
	Bbox         []float64                 `json:"bbox"`
	Countries    []string                  `json:"countries"`
	Entity       *string                   `json:"entity"`
	FirstUpdated time.Time                 `json:"firstUpdated"`
	ID           int64                     `json:"id"`
	IsAnalysis   *bool                     `json:"isAnalysis"`
	IsMobile     *bool                     `json:"isMobile"`
	LastUpdated  time.Time                 `json:"lastUpdated"`
	LocationIds  []int64                   `json:"locationIds"`
	Locations    int64                     `json:"locations"`
	Measurements int64                     `json:"measurements"`
	Name         string                    `json:"name"`
	Parameters   []ProjectParameterDetails `json:"parameters"`
	SensorType   *string                   `json:"sensorType"`
	Sources      []interface{}             `json:"sources"`
	Subtitle     string                    `json:"subtitle"`
}
