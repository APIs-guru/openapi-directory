package shared

// GlossaryTermsSet
// Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
type GlossaryTermsSet struct {
	Terms []GlossaryTerm `json:"terms,omitempty"`
}
