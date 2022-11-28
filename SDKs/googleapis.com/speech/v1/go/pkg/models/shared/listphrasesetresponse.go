package shared

// ListPhraseSetResponse
// Message returned to the client by the `ListPhraseSet` method.
type ListPhraseSetResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	PhraseSets    []PhraseSet `json:"phraseSets,omitempty"`
}
