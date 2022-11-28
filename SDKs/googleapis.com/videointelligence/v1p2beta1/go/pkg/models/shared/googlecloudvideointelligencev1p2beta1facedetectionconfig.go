package shared

// GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig
// Config for FACE_DETECTION.
type GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig struct {
	IncludeAttributes    *bool   `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool   `json:"includeBoundingBoxes,omitempty"`
	Model                *string `json:"model,omitempty"`
}
