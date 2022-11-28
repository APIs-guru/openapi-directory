package shared

// GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores
// Image Quality Scores for the page image
type GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects,omitempty"`
	QualityScore    *float32                                                                   `json:"qualityScore,omitempty"`
}
