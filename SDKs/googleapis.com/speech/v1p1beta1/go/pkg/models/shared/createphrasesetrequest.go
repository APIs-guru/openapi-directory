package shared

type CreatePhraseSetRequest struct {
	PhraseSet   *PhraseSet `json:"phraseSet,omitempty"`
	PhraseSetID *string    `json:"phraseSetId,omitempty"`
}
