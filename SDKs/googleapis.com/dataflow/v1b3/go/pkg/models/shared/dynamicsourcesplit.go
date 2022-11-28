package shared

// DynamicSourceSplit
// When a task splits using WorkItemStatus.dynamic_source_split, this message describes the two parts of the split relative to the description of the current task's input.
type DynamicSourceSplit struct {
	Primary  *DerivedSource `json:"primary,omitempty"`
	Residual *DerivedSource `json:"residual,omitempty"`
}
