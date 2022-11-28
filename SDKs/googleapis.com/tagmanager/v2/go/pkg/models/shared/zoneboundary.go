package shared

// ZoneBoundary
// Represents a Zone's boundaries.
type ZoneBoundary struct {
	Condition                 []Condition `json:"condition,omitempty"`
	CustomEvaluationTriggerID []string    `json:"customEvaluationTriggerId,omitempty"`
}
