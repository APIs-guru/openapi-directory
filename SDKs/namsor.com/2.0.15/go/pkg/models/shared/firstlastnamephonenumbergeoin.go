package shared

type FirstLastNamePhoneNumberGeoIn struct {
	FirstLastNameOriginedOut *FirstLastNameOriginedOut `json:"FirstLastNameOriginedOut,omitempty"`
	CountryIso2              *string                   `json:"countryIso2,omitempty"`
	CountryIso2Alt           *string                   `json:"countryIso2Alt,omitempty"`
	FirstName                *string                   `json:"firstName,omitempty"`
	ID                       *string                   `json:"id,omitempty"`
	LastName                 *string                   `json:"lastName,omitempty"`
	PhoneNumber              *string                   `json:"phoneNumber,omitempty"`
}
