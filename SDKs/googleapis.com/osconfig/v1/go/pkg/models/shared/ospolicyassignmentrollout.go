package shared

type OsPolicyAssignmentRollout struct {
	DisruptionBudget *FixedOrPercent `json:"disruptionBudget"`
	MinWaitDuration  *string         `json:"minWaitDuration"`
}
