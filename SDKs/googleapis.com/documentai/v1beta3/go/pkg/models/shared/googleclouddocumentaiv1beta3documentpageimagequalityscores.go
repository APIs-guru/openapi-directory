package shared

type GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects"`
	QualityScore    *float32                                                                   `json:"qualityScore"`
}
