package shared

// Contact
// Details required for a contact associated with a `Registration`.
type Contact struct {
	Email         *string        `json:"email,omitempty"`
	FaxNumber     *string        `json:"faxNumber,omitempty"`
	PhoneNumber   *string        `json:"phoneNumber,omitempty"`
	PostalAddress *PostalAddress `json:"postalAddress,omitempty"`
}
