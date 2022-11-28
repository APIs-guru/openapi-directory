package shared

// GoogleCloudDataplexV1DataQualityRuleRangeExpectation
// Evaluates whether each column value lies between a specified range.
type GoogleCloudDataplexV1DataQualityRuleRangeExpectation struct {
	MaxValue         *string `json:"maxValue,omitempty"`
	MinValue         *string `json:"minValue,omitempty"`
	StrictMaxEnabled *bool   `json:"strictMaxEnabled,omitempty"`
	StrictMinEnabled *bool   `json:"strictMinEnabled,omitempty"`
}
