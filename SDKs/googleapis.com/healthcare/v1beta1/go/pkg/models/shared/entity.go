package shared

// Entity
// The candidate entities that an entity mention could link to.
type Entity struct {
	EntityID        *string  `json:"entityId,omitempty"`
	PreferredTerm   *string  `json:"preferredTerm,omitempty"`
	VocabularyCodes []string `json:"vocabularyCodes,omitempty"`
}
