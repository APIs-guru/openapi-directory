package shared

type OsPolicyAssignmentInstanceFilter struct {
	All             *bool                                       `json:"all"`
	ExclusionLabels []OsPolicyAssignmentLabelSet                `json:"exclusionLabels"`
	InclusionLabels []OsPolicyAssignmentLabelSet                `json:"inclusionLabels"`
	Inventories     []OsPolicyAssignmentInstanceFilterInventory `json:"inventories"`
}
