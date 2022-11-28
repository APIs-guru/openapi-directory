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

// Outcome
// Interprets a result so that humans and machines can act on it.
type Outcome struct {
	FailureDetail      *FailureDetail      `json:"failureDetail,omitempty"`
	InconclusiveDetail *InconclusiveDetail `json:"inconclusiveDetail,omitempty"`
	SkippedDetail      *SkippedDetail      `json:"skippedDetail,omitempty"`
	SuccessDetail      *SuccessDetail      `json:"successDetail,omitempty"`
	Summary            *OutcomeSummaryEnum `json:"summary,omitempty"`
}
