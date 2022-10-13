package shared

type FirstLastNamePhoneNumberGeoIn struct {
	FirstLastNameOriginedOut *FirstLastNameOriginedOut `json:"FirstLastNameOriginedOut"`
	CountryIso2              *string                   `json:"countryIso2"`
	CountryIso2Alt           *string                   `json:"countryIso2Alt"`
	FirstName                *string                   `json:"firstName"`
	ID                       *string                   `json:"id"`
	LastName                 *string                   `json:"lastName"`
	PhoneNumber              *string                   `json:"phoneNumber"`
}
