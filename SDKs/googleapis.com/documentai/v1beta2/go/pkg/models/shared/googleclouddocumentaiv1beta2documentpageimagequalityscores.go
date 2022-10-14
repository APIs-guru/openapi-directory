package shared

type GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects,omitempty"`
	QualityScore    *float32                                                                   `json:"qualityScore,omitempty"`
}
