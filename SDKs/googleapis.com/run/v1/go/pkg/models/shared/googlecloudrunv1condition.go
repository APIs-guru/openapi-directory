package shared

// GoogleCloudRunV1Condition
// Conditions show the status of reconciliation progress on a given resource. Most resource use a top-level condition type "Ready" or "Completed" to show overall status with other conditions to checkpoint each stage of reconciliation. Note that if metadata.Generation does not equal status.ObservedGeneration, the conditions shown may not be relevant for the current spec.
type GoogleCloudRunV1Condition struct {
	LastTransitionTime *string `json:"lastTransitionTime,omitempty"`
	Message            *string `json:"message,omitempty"`
	Reason             *string `json:"reason,omitempty"`
	Severity           *string `json:"severity,omitempty"`
	Status             *string `json:"status,omitempty"`
	Type               *string `json:"type,omitempty"`
}
