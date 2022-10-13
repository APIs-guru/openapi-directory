package shared

type Options struct {
	IncludeOnlyTargetedUserLists *bool             `json:"includeOnlyTargetedUserLists"`
	PathQueryOptions             *PathQueryOptions `json:"pathQueryOptions"`
}
