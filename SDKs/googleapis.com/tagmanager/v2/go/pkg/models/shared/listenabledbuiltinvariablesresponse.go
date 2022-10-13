package shared

type ListEnabledBuiltInVariablesResponse struct {
	BuiltInVariable []BuiltInVariable `json:"builtInVariable"`
	NextPageToken   *string           `json:"nextPageToken"`
}
