package shared

type ContactInfo struct {
	CountryCode        *string  `json:"countryCode"`
	HashedEmails       []string `json:"hashedEmails"`
	HashedFirstName    *string  `json:"hashedFirstName"`
	HashedLastName     *string  `json:"hashedLastName"`
	HashedPhoneNumbers []string `json:"hashedPhoneNumbers"`
	ZipCodes           []string `json:"zipCodes"`
}
