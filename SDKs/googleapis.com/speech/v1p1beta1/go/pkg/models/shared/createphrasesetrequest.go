package shared

type CreatePhraseSetRequest struct {
	PhraseSet   *PhraseSet `json:"phraseSet"`
	PhraseSetID *string    `json:"phraseSetId"`
}
