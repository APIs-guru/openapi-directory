package shared

type FirstLastNamePhoneNumberIn struct {
	FirstLastNameOriginedOut *FirstLastNameOriginedOut `json:"FirstLastNameOriginedOut"`
	FirstName                *string                   `json:"firstName"`
	ID                       *string                   `json:"id"`
	LastName                 *string                   `json:"lastName"`
	PhoneNumber              *string                   `json:"phoneNumber"`
}
