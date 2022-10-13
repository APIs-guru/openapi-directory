package shared

type GoogleCloudDocumentaiV1DocumentPageImageQualityScores struct {
	DetectedDefects []GoogleCloudDocumentaiV1DocumentPageImageQualityScoresDetectedDefect `json:"detectedDefects"`
	QualityScore    *float32                                                              `json:"qualityScore"`
}
