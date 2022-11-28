package shared

// GoogleCloudDocumentaiV1DocumentPageImageQualityScores
// Image Quality Scores for the page image
type GoogleCloudDocumentaiV1DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects,omitempty"`
	QualityScore    *float32                                                              `json:"qualityScore,omitempty"`
}
