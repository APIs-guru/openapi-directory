package shared



type WorkloadCostEstimate struct {
    Name *string `json:"name,omitempty"`
    SkuCostEstimates []SkuCostEstimate `json:"skuCostEstimates,omitempty"`
    WorkloadTotalCostEstimate *CostEstimate `json:"workloadTotalCostEstimate,omitempty"`
    
}

