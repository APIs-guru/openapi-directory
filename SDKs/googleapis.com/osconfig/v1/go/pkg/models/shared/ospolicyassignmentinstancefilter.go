package shared



type OsPolicyAssignmentInstanceFilter struct {
    All *bool `json:"all,omitempty"`
    ExclusionLabels []OsPolicyAssignmentLabelSet `json:"exclusionLabels,omitempty"`
    InclusionLabels []OsPolicyAssignmentLabelSet `json:"inclusionLabels,omitempty"`
    Inventories []OsPolicyAssignmentInstanceFilterInventory `json:"inventories,omitempty"`
    
}

