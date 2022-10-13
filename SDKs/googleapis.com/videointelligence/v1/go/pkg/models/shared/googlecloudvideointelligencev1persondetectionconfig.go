package shared

type GoogleCloudVideointelligenceV1PersonDetectionConfig struct {
	IncludeAttributes    *bool `json:"includeAttributes"`
	IncludeBoundingBoxes *bool `json:"includeBoundingBoxes"`
	IncludePoseLandmarks *bool `json:"includePoseLandmarks"`
}
