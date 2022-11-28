package shared

// GoogleCloudRecommenderV1SustainabilityProjection
// Contains metadata about how much sustainability a recommendation can save or incur.
type GoogleCloudRecommenderV1SustainabilityProjection struct {
	Duration *string  `json:"duration,omitempty"`
	KgCo2e   *float64 `json:"kgCO2e,omitempty"`
}
