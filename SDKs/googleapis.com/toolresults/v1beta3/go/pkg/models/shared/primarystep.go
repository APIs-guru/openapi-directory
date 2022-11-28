package shared

type PrimaryStepRollUpEnum string

const (
	PrimaryStepRollUpEnumUnset        PrimaryStepRollUpEnum = "unset"
	PrimaryStepRollUpEnumSuccess      PrimaryStepRollUpEnum = "success"
	PrimaryStepRollUpEnumFailure      PrimaryStepRollUpEnum = "failure"
	PrimaryStepRollUpEnumInconclusive PrimaryStepRollUpEnum = "inconclusive"
	PrimaryStepRollUpEnumSkipped      PrimaryStepRollUpEnum = "skipped"
	PrimaryStepRollUpEnumFlaky        PrimaryStepRollUpEnum = "flaky"
)

// PrimaryStep
// Stores rollup test status of multiple steps that were run as a group and outcome of each individual step.
type PrimaryStep struct {
	IndividualOutcome []IndividualOutcome    `json:"individualOutcome,omitempty"`
	RollUp            *PrimaryStepRollUpEnum `json:"rollUp,omitempty"`
}
