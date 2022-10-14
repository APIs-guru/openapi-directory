package shared

type Entity struct {
	EntityID        *string  `json:"entityId,omitempty"`
	PreferredTerm   *string  `json:"preferredTerm,omitempty"`
	VocabularyCodes []string `json:"vocabularyCodes,omitempty"`
}
