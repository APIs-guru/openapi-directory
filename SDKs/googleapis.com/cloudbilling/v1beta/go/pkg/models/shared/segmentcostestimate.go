package shared

type SegmentCostEstimate struct {
	CommitmentCostEstimates  []CommitmentCostEstimate `json:"commitmentCostEstimates"`
	SegmentStartTime         *EstimationTimePoint     `json:"segmentStartTime"`
	SegmentTotalCostEstimate *CostEstimate            `json:"segmentTotalCostEstimate"`
	WorkloadCostEstimates    []WorkloadCostEstimate   `json:"workloadCostEstimates"`
}
