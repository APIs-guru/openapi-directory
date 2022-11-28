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

// IndividualOutcome
// Step Id and outcome of each individual step that was run as a group with other steps with the same configuration.
type IndividualOutcome struct {
	MultistepNumber *int32                               `json:"multistepNumber,omitempty"`
	OutcomeSummary  *IndividualOutcomeOutcomeSummaryEnum `json:"outcomeSummary,omitempty"`
	RunDuration     *Duration                            `json:"runDuration,omitempty"`
	StepID          *string                              `json:"stepId,omitempty"`
}
