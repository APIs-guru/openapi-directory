package shared

// ContactInfo
// Contact information defining a Customer Match audience member.
type ContactInfo struct {
	CountryCode        *string  `json:"countryCode,omitempty"`
	HashedEmails       []string `json:"hashedEmails,omitempty"`
	HashedFirstName    *string  `json:"hashedFirstName,omitempty"`
	HashedLastName     *string  `json:"hashedLastName,omitempty"`
	HashedPhoneNumbers []string `json:"hashedPhoneNumbers,omitempty"`
	ZipCodes           []string `json:"zipCodes,omitempty"`
}
