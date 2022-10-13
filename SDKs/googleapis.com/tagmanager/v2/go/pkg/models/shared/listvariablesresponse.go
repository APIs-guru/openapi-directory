package shared

type ListVariablesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	Variable      []Variable `json:"variable"`
}
