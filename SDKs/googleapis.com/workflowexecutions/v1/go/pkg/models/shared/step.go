package shared

// Step
// Represents a step of the workflow this execution is running.
type Step struct {
	Routine *string `json:"routine,omitempty"`
	Step    *string `json:"step,omitempty"`
}
