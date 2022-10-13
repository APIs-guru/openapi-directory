package shared

type ApproximateReportedProgress struct {
	ConsumedParallelism  *ReportedParallelism `json:"consumedParallelism"`
	FractionConsumed     *float64             `json:"fractionConsumed"`
	Position             *Position            `json:"position"`
	RemainingParallelism *ReportedParallelism `json:"remainingParallelism"`
}
