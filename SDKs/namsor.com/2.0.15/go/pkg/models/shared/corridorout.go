package shared

type CorridorOut struct {
	FirstLastNameDiasporaedOut *FirstLastNameDiasporaedOut `json:"FirstLastNameDiasporaedOut"`
	FirstLastNameGenderedOut   *FirstLastNameGenderedOut   `json:"FirstLastNameGenderedOut"`
	FirstLastNameOriginedOut   *FirstLastNameOriginedOut   `json:"FirstLastNameOriginedOut"`
	ID                         *string                     `json:"id"`
	Script                     *string                     `json:"script"`
}
