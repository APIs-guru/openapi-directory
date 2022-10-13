package shared

type IndividualOutcomeOutcomeSummaryEnum string

const (
	IndividualOutcomeOutcomeSummaryEnumUnset        IndividualOutcomeOutcomeSummaryEnum = "unset"
	IndividualOutcomeOutcomeSummaryEnumSuccess      IndividualOutcomeOutcomeSummaryEnum = "success"
	IndividualOutcomeOutcomeSummaryEnumFailure      IndividualOutcomeOutcomeSummaryEnum = "failure"
	IndividualOutcomeOutcomeSummaryEnumInconclusive IndividualOutcomeOutcomeSummaryEnum = "inconclusive"
	IndividualOutcomeOutcomeSummaryEnumSkipped      IndividualOutcomeOutcomeSummaryEnum = "skipped"
	IndividualOutcomeOutcomeSummaryEnumFlaky        IndividualOutcomeOutcomeSummaryEnum = "flaky"
)

type IndividualOutcome struct {
	MultistepNumber *int32                               `json:"multistepNumber"`
	OutcomeSummary  *IndividualOutcomeOutcomeSummaryEnum `json:"outcomeSummary"`
	RunDuration     *Duration                            `json:"runDuration"`
	StepID          *string                              `json:"stepId"`
}
