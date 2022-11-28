package shared

// CostEstimationResult
// The result of a estimating the costs of a `CostScenario`.
type CostEstimationResult struct {
	CurrencyCode         *string               `json:"currencyCode,omitempty"`
	SegmentCostEstimates []SegmentCostEstimate `json:"segmentCostEstimates,omitempty"`
	Skus                 []Sku                 `json:"skus,omitempty"`
}
