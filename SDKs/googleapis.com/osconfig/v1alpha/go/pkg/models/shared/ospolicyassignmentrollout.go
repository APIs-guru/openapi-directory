package shared



type OsPolicyAssignmentRollout struct {
    DisruptionBudget *FixedOrPercent `json:"disruptionBudget,omitempty"`
    MinWaitDuration *string `json:"minWaitDuration,omitempty"`
    
}

