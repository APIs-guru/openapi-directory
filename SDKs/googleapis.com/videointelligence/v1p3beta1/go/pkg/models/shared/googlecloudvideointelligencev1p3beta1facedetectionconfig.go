package shared

type GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig struct {
	IncludeAttributes    *bool   `json:"includeAttributes,omitempty"`
	IncludeBoundingBoxes *bool   `json:"includeBoundingBoxes,omitempty"`
	Model                *string `json:"model,omitempty"`
}
