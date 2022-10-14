package shared

type ZoneBoundary struct {
	Condition                 []Condition `json:"condition,omitempty"`
	CustomEvaluationTriggerID []string    `json:"customEvaluationTriggerId,omitempty"`
}
