package shared

type FirstLastNamePhoneNumberIn struct {
	FirstLastNameOriginedOut *FirstLastNameOriginedOut `json:"FirstLastNameOriginedOut,omitempty"`
	FirstName                *string                   `json:"firstName,omitempty"`
	ID                       *string                   `json:"id,omitempty"`
	LastName                 *string                   `json:"lastName,omitempty"`
	PhoneNumber              *string                   `json:"phoneNumber,omitempty"`
}
