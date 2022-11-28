package shared

// OsPolicyAssignmentRollout
// Message to configure the rollout at the zonal level for the OS policy assignment.
type OsPolicyAssignmentRollout struct {
	DisruptionBudget *FixedOrPercent `json:"disruptionBudget,omitempty"`
	MinWaitDuration  *string         `json:"minWaitDuration,omitempty"`
}
