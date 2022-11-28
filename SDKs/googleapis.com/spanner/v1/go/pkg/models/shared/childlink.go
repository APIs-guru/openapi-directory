package shared

// ChildLink
// Metadata associated with a parent-child relationship appearing in a PlanNode.
type ChildLink struct {
	ChildIndex *int32  `json:"childIndex,omitempty"`
	Type       *string `json:"type,omitempty"`
	Variable   *string `json:"variable,omitempty"`
}
