package shared

// Options
// Additional query options.
type Options struct {
	IncludeOnlyTargetedUserLists *bool             `json:"includeOnlyTargetedUserLists,omitempty"`
	PathQueryOptions             *PathQueryOptions `json:"pathQueryOptions,omitempty"`
}
