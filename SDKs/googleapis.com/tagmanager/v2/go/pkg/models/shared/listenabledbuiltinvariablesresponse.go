package shared

// ListEnabledBuiltInVariablesResponse
// A list of enabled built-in variables.
type ListEnabledBuiltInVariablesResponse struct {
	BuiltInVariable []BuiltInVariable `json:"builtInVariable,omitempty"`
	NextPageToken   *string           `json:"nextPageToken,omitempty"`
}
