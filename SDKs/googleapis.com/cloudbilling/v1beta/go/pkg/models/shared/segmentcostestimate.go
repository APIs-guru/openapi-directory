package shared



type SegmentCostEstimate struct {
    CommitmentCostEstimates []CommitmentCostEstimate `json:"commitmentCostEstimates,omitempty"`
    SegmentStartTime *EstimationTimePoint `json:"segmentStartTime,omitempty"`
    SegmentTotalCostEstimate *CostEstimate `json:"segmentTotalCostEstimate,omitempty"`
    WorkloadCostEstimates []WorkloadCostEstimate `json:"workloadCostEstimates,omitempty"`
    
}

