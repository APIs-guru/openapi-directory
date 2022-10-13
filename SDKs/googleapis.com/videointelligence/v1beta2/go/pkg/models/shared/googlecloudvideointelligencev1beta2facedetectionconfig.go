package shared

type GoogleCloudVideointelligenceV1beta2FaceDetectionConfig struct {
	IncludeAttributes    *bool   `json:"includeAttributes"`
	IncludeBoundingBoxes *bool   `json:"includeBoundingBoxes"`
	Model                *string `json:"model"`
}
