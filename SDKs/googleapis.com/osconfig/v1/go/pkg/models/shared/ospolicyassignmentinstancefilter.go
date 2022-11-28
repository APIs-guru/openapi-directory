package shared

// OsPolicyAssignmentInstanceFilter
// Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them.
type OsPolicyAssignmentInstanceFilter struct {
	All             *bool                                       `json:"all,omitempty"`
	ExclusionLabels []OsPolicyAssignmentLabelSet                `json:"exclusionLabels,omitempty"`
	InclusionLabels []OsPolicyAssignmentLabelSet                `json:"inclusionLabels,omitempty"`
	Inventories     []OsPolicyAssignmentInstanceFilterInventory `json:"inventories,omitempty"`
}
