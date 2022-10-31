package shared

type FirstLastNamePhoneCodedOut struct {
	CountryIso2                      *string  `json:"countryIso2,omitempty"`
	FirstName                        *string  `json:"firstName,omitempty"`
	ID                               *string  `json:"id,omitempty"`
	InternationalPhoneNumberVerified *string  `json:"internationalPhoneNumberVerified,omitempty"`
	LastName                         *string  `json:"lastName,omitempty"`
	OriginCountryIso2                *string  `json:"originCountryIso2,omitempty"`
	OriginCountryIso2Alt             *string  `json:"originCountryIso2Alt,omitempty"`
	PhoneCountryCode                 *int32   `json:"phoneCountryCode,omitempty"`
	PhoneCountryCodeAlt              *int32   `json:"phoneCountryCodeAlt,omitempty"`
	PhoneCountryIso2                 *string  `json:"phoneCountryIso2,omitempty"`
	PhoneCountryIso2Alt              *string  `json:"phoneCountryIso2Alt,omitempty"`
	PhoneCountryIso2Verified         *string  `json:"phoneCountryIso2Verified,omitempty"`
	PhoneNumber                      *string  `json:"phoneNumber,omitempty"`
	Score                            *float64 `json:"score,omitempty"`
	Script                           *string  `json:"script,omitempty"`
	Verified                         *bool    `json:"verified,omitempty"`
}
