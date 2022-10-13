package shared

type CostEstimationResult struct {
	CurrencyCode         *string               `json:"currencyCode"`
	SegmentCostEstimates []SegmentCostEstimate `json:"segmentCostEstimates"`
	Skus                 []Sku                 `json:"skus"`
}
