package shared

type WorkloadCostEstimate struct {
	Name                      *string           `json:"name"`
	SkuCostEstimates          []SkuCostEstimate `json:"skuCostEstimates"`
	WorkloadTotalCostEstimate *CostEstimate     `json:"workloadTotalCostEstimate"`
}
