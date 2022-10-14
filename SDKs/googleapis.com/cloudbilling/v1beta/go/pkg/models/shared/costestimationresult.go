package shared

type CostEstimationResult struct {
	CurrencyCode         *string               `json:"currencyCode,omitempty"`
	SegmentCostEstimates []SegmentCostEstimate `json:"segmentCostEstimates,omitempty"`
	Skus                 []Sku                 `json:"skus,omitempty"`
}
