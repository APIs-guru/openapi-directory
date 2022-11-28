package shared

// GoogleCloudContactcenterinsightsV1Analysis
// The analysis resource.
type GoogleCloudContactcenterinsightsV1Analysis struct {
	AnalysisResult *GoogleCloudContactcenterinsightsV1AnalysisResult `json:"analysisResult,omitempty"`
	CreateTime     *string                                           `json:"createTime,omitempty"`
	Name           *string                                           `json:"name,omitempty"`
	RequestTime    *string                                           `json:"requestTime,omitempty"`
}

// GoogleCloudContactcenterinsightsV1AnalysisInput
// The analysis resource.
type GoogleCloudContactcenterinsightsV1AnalysisInput struct {
	AnalysisResult *GoogleCloudContactcenterinsightsV1AnalysisResult `json:"analysisResult,omitempty"`
	Name           *string                                           `json:"name,omitempty"`
}
