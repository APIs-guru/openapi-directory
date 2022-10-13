package shared

type JobCondition struct {
	LastTransitionTime *string `json:"lastTransitionTime"`
	Message            *string `json:"message"`
	Reason             *string `json:"reason"`
	Severity           *string `json:"severity"`
	Status             *string `json:"status"`
	Type               *string `json:"type"`
}
