package shared

// BatchFirstLastNameGenderedOut
// Represents the output of inferring the LIKELY gender from a list of personal names.
type BatchFirstLastNameGenderedOut struct {
	PersonalNames []FirstLastNameGenderedOut `json:"personalNames,omitempty"`
}
