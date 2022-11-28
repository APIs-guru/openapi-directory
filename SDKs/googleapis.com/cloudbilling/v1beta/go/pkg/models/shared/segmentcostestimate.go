package shared

// SegmentCostEstimate
// Workload cost estimates for a single time segment.
type SegmentCostEstimate struct {
	CommitmentCostEstimates  []CommitmentCostEstimate `json:"commitmentCostEstimates,omitempty"`
	SegmentStartTime         *EstimationTimePoint     `json:"segmentStartTime,omitempty"`
	SegmentTotalCostEstimate *CostEstimate            `json:"segmentTotalCostEstimate,omitempty"`
	WorkloadCostEstimates    []WorkloadCostEstimate   `json:"workloadCostEstimates,omitempty"`
}
