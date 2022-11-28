package shared

// BatchFirstLastNameOriginedOut
// Represents the output of inferring the LIKELY origin from a list of personal names.
type BatchFirstLastNameOriginedOut struct {
	PersonalNames []FirstLastNameOriginedOut `json:"personalNames,omitempty"`
}
