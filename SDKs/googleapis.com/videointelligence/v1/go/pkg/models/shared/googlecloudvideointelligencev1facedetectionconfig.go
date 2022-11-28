package shared

// GoogleCloudVideointelligenceV1FaceDetectionConfig
// Config for FACE_DETECTION.
type GoogleCloudVideointelligenceV1FaceDetectionConfig struct {
	IncludeAttributes    *bool   `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool   `json:"includeBoundingBoxes,omitempty"`
	Model                *string `json:"model,omitempty"`
}
