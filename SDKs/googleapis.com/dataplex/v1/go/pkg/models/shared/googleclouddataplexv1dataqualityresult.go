package shared

// GoogleCloudDataplexV1DataQualityResult
// The output of a DataQualityScan.
type GoogleCloudDataplexV1DataQualityResult struct {
	Dimensions  []GoogleCloudDataplexV1DataQualityDimensionResult `json:"dimensions,omitempty"`
	Passed      *bool                                             `json:"passed,omitempty"`
	RowCount    *string                                           `json:"rowCount,omitempty"`
	Rules       []GoogleCloudDataplexV1DataQualityRuleResult      `json:"rules,omitempty"`
	ScannedData *GoogleCloudDataplexV1ScannedData                 `json:"scannedData,omitempty"`
}
