package shared

// ListVariablesResponse
// Response for the `ListVariables()` method.
type ListVariablesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Variables     []Variable `json:"variables,omitempty"`
}
