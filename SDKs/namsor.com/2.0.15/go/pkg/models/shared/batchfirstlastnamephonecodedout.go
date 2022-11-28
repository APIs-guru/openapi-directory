package shared

// BatchFirstLastNamePhoneCodedOut
// Represents the output of inferring the LIKELY country and phone code of personal names+phones.
type BatchFirstLastNamePhoneCodedOut struct {
	PersonalNamesWithPhoneNumbers []FirstLastNamePhoneCodedOut `json:"personalNamesWithPhoneNumbers,omitempty"`
}
