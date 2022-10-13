package shared

type ZoneBoundary struct {
	Condition                 []Condition `json:"condition"`
	CustomEvaluationTriggerID []string    `json:"customEvaluationTriggerId"`
}
