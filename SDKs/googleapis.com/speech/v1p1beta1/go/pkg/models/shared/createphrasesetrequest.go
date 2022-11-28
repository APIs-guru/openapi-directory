package shared

// CreatePhraseSetRequest
// Message sent by the client for the `CreatePhraseSet` method.
type CreatePhraseSetRequest struct {
	PhraseSet   *PhraseSet `json:"phraseSet,omitempty"`
	PhraseSetID *string    `json:"phraseSetId,omitempty"`
}
