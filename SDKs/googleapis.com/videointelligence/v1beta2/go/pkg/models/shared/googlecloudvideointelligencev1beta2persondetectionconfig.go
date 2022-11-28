package shared

// GoogleCloudVideointelligenceV1beta2PersonDetectionConfig
// Config for PERSON_DETECTION.
type GoogleCloudVideointelligenceV1beta2PersonDetectionConfig struct {
	IncludeAttributes    *bool `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool `json:"includeBoundingBoxes,omitempty"`
	IncludePoseLandmarks *bool `json:"includePoseLandmarks,omitempty"`
}
