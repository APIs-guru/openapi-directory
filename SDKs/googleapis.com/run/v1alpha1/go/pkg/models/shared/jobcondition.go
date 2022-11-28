package shared

// JobCondition
// JobCondition defines a readiness condition for a Revision.
type JobCondition struct {
	LastTransitionTime *string `json:"lastTransitionTime,omitempty"`
	Message            *string `json:"message,omitempty"`
	Reason             *string `json:"reason,omitempty"`
	Severity           *string `json:"severity,omitempty"`
	Status             *string `json:"status,omitempty"`
	Type               *string `json:"type,omitempty"`
}
