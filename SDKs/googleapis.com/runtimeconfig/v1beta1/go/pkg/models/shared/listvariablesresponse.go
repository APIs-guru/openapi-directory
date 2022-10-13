package shared

type ListVariablesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Variables     []Variable `json:"variables"`
}
