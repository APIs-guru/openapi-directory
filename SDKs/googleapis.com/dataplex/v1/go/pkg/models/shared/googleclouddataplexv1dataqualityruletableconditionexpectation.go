package shared

// GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation
// Evaluates whether the provided expression is true. The SQL expression needs to use BigQuery standard SQL syntax and should produce a scalar boolean result. Example: MIN(col1) >= 0
type GoogleCloudDataplexV1DataQualityRuleTableConditionExpectation struct {
	SQLExpression *string `json:"sqlExpression,omitempty"`
}
