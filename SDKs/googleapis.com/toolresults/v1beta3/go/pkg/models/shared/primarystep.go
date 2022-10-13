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

type PrimaryStep struct {
	IndividualOutcome []IndividualOutcome    `json:"individualOutcome"`
	RollUp            *PrimaryStepRollUpEnum `json:"rollUp"`
}
