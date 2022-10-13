package shared

type GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects"`
	QualityScore    *float32                                                                   `json:"qualityScore"`
}
