package shared

type FirstLastNamePhoneCodedOut struct {
	CountryIso2                      *string  `json:"countryIso2"`
	FirstName                        *string  `json:"firstName"`
	ID                               *string  `json:"id"`
	InternationalPhoneNumberVerified *string  `json:"internationalPhoneNumberVerified"`
	LastName                         *string  `json:"lastName"`
	OriginCountryIso2                *string  `json:"originCountryIso2"`
	OriginCountryIso2Alt             *string  `json:"originCountryIso2Alt"`
	PhoneCountryCode                 *int32   `json:"phoneCountryCode"`
	PhoneCountryCodeAlt              *int32   `json:"phoneCountryCodeAlt"`
	PhoneCountryIso2                 *string  `json:"phoneCountryIso2"`
	PhoneCountryIso2Alt              *string  `json:"phoneCountryIso2Alt"`
	PhoneCountryIso2Verified         *string  `json:"phoneCountryIso2Verified"`
	PhoneNumber                      *string  `json:"phoneNumber"`
	Score                            *float64 `json:"score"`
	Script                           *string  `json:"script"`
	Verified                         *bool    `json:"verified"`
}
