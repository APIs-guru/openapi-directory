package shared

type ListPhraseSetResponse struct {
	NextPageToken *string     `json:"nextPageToken"`
	PhraseSets    []PhraseSet `json:"phraseSets"`
}
