package shared

type Options struct {
	IncludeOnlyTargetedUserLists *bool             `json:"includeOnlyTargetedUserLists,omitempty"`
	PathQueryOptions             *PathQueryOptions `json:"pathQueryOptions,omitempty"`
}
