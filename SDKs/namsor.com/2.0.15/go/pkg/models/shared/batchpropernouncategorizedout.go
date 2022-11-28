package shared

// BatchProperNounCategorizedOut
// Represents the output of inferring the common type (anthroponym, toponym, brand, etc.) from a list of proper names.
type BatchProperNounCategorizedOut struct {
	ProperNouns []ProperNounCategorizedOut `json:"properNouns,omitempty"`
}
