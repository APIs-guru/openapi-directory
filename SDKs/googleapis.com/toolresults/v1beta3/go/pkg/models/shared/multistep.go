package shared

// MultiStep
// Details when multiple steps are run with the same configuration as a group.
type MultiStep struct {
	MultistepNumber *int32       `json:"multistepNumber,omitempty"`
	PrimaryStep     *PrimaryStep `json:"primaryStep,omitempty"`
	PrimaryStepID   *string      `json:"primaryStepId,omitempty"`
}
