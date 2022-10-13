package shared

type Entity struct {
	EntityID        *string  `json:"entityId"`
	PreferredTerm   *string  `json:"preferredTerm"`
	VocabularyCodes []string `json:"vocabularyCodes"`
}
