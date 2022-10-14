package shared

type ListEnabledBuiltInVariablesResponse struct {
	BuiltInVariable []BuiltInVariable `json:"builtInVariable,omitempty"`
	NextPageToken   *string           `json:"nextPageToken,omitempty"`
}
