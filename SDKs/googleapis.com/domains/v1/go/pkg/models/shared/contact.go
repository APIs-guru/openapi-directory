package shared

type Contact struct {
	Email         *string        `json:"email"`
	FaxNumber     *string        `json:"faxNumber"`
	PhoneNumber   *string        `json:"phoneNumber"`
	PostalAddress *PostalAddress `json:"postalAddress"`
}
