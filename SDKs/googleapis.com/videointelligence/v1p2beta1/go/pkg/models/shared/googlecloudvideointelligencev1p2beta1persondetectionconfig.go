package shared

// GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig
// Config for PERSON_DETECTION.
type GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig struct {
	IncludeAttributes    *bool `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool `json:"includeBoundingBoxes,omitempty"`
	IncludePoseLandmarks *bool `json:"includePoseLandmarks,omitempty"`
}
