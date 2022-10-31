package shared



type ApproximateReportedProgress struct {
    ConsumedParallelism *ReportedParallelism `json:"consumedParallelism,omitempty"`
    FractionConsumed *float64 `json:"fractionConsumed,omitempty"`
    Position *Position `json:"position,omitempty"`
    RemainingParallelism *ReportedParallelism `json:"remainingParallelism,omitempty"`
    
}

