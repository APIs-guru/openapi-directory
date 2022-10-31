package shared

type ListPhraseSetResponse struct {
	NextPageToken *string     `json:"nextPageToken,omitempty"`
	PhraseSets    []PhraseSet `json:"phraseSets,omitempty"`
}
