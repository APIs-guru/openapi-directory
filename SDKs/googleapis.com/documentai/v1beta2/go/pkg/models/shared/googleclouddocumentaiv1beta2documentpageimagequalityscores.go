package shared

// GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores
// Image Quality Scores for the page image
type GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects,omitempty"`
	QualityScore    *float32                                                                   `json:"qualityScore,omitempty"`
}
