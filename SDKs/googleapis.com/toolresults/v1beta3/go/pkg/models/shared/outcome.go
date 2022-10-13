package shared

type OutcomeSummaryEnum string

const (
	OutcomeSummaryEnumUnset        OutcomeSummaryEnum = "unset"
	OutcomeSummaryEnumSuccess      OutcomeSummaryEnum = "success"
	OutcomeSummaryEnumFailure      OutcomeSummaryEnum = "failure"
	OutcomeSummaryEnumInconclusive OutcomeSummaryEnum = "inconclusive"
	OutcomeSummaryEnumSkipped      OutcomeSummaryEnum = "skipped"
	OutcomeSummaryEnumFlaky        OutcomeSummaryEnum = "flaky"
)

type Outcome struct {
	FailureDetail      *FailureDetail      `json:"failureDetail"`
	InconclusiveDetail *InconclusiveDetail `json:"inconclusiveDetail"`
	SkippedDetail      *SkippedDetail      `json:"skippedDetail"`
	SuccessDetail      *SuccessDetail      `json:"successDetail"`
	Summary            *OutcomeSummaryEnum `json:"summary"`
}
