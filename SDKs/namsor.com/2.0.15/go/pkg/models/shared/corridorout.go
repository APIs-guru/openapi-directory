package shared

// CorridorOut
// Represent multiple classifications for corridor sender and receiver (gender, country, origin, diaspora)
type CorridorOut struct {
	FirstLastNameDiasporaedOut *FirstLastNameDiasporaedOut `json:"FirstLastNameDiasporaedOut,omitempty"`
	FirstLastNameGenderedOut   *FirstLastNameGenderedOut   `json:"FirstLastNameGenderedOut,omitempty"`
	FirstLastNameOriginedOut   *FirstLastNameOriginedOut   `json:"FirstLastNameOriginedOut,omitempty"`
	ID                         *string                     `json:"id,omitempty"`
	Script                     *string                     `json:"script,omitempty"`
}
