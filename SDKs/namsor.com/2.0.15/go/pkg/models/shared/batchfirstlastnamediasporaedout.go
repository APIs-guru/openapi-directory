package shared

// BatchFirstLastNameDiasporaedOut
// Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
type BatchFirstLastNameDiasporaedOut struct {
	PersonalNames []FirstLastNameDiasporaedOut `json:"personalNames,omitempty"`
}
