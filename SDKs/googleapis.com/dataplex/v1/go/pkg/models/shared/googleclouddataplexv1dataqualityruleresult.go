package shared

// GoogleCloudDataplexV1DataQualityRuleResult
// DataQualityRuleResult provides a more detailed, per-rule level view of the results.
type GoogleCloudDataplexV1DataQualityRuleResult struct {
	EvaluatedCount   *string                               `json:"evaluatedCount,omitempty"`
	FailingRowsQuery *string                               `json:"failingRowsQuery,omitempty"`
	NullCount        *string                               `json:"nullCount,omitempty"`
	PassRatio        *float64                              `json:"passRatio,omitempty"`
	Passed           *bool                                 `json:"passed,omitempty"`
	PassedCount      *string                               `json:"passedCount,omitempty"`
	Rule             *GoogleCloudDataplexV1DataQualityRule `json:"rule,omitempty"`
}
