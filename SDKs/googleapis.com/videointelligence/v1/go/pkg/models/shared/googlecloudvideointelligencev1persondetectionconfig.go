package shared

// GoogleCloudVideointelligenceV1PersonDetectionConfig
// Config for PERSON_DETECTION.
type GoogleCloudVideointelligenceV1PersonDetectionConfig struct {
	IncludeAttributes    *bool `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool `json:"includeBoundingBoxes,omitempty"`
	IncludePoseLandmarks *bool `json:"includePoseLandmarks,omitempty"`
}
