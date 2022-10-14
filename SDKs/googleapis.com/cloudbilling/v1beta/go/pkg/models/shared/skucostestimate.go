package shared

type SkuCostEstimate struct {
	CostEstimate *CostEstimate `json:"costEstimate,omitempty"`
	Sku          *string       `json:"sku,omitempty"`
	UsageAmount  *float64      `json:"usageAmount,omitempty"`
	UsageUnit    *string       `json:"usageUnit,omitempty"`
}
