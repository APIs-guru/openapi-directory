package shared

type SkuCostEstimate struct {
	CostEstimate *CostEstimate `json:"costEstimate"`
	Sku          *string       `json:"sku"`
	UsageAmount  *float64      `json:"usageAmount"`
	UsageUnit    *string       `json:"usageUnit"`
}
