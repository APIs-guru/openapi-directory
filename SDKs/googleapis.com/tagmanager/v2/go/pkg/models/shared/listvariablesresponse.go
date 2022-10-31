package shared

type ListVariablesResponse struct {
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Variable      []Variable `json:"variable,omitempty"`
}
