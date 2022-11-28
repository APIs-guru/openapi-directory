package shared

// GoogleCloudVideointelligenceV1beta2FaceDetectionConfig
// Config for FACE_DETECTION.
type GoogleCloudVideointelligenceV1beta2FaceDetectionConfig struct {
	IncludeAttributes    *bool   `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool   `json:"includeBoundingBoxes,omitempty"`
	Model                *string `json:"model,omitempty"`
}
