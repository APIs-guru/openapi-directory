package shared

// Status
// Represents the current status of this execution.
type Status struct {
	CurrentSteps []Step `json:"currentSteps,omitempty"`
}
