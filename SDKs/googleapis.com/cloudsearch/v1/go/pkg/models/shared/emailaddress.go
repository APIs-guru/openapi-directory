package shared

// EmailAddress
// A person's email address.
type EmailAddress struct {
	CustomType   *string `json:"customType,omitempty"`
	EmailAddress *string `json:"emailAddress,omitempty"`
	EmailURL     *string `json:"emailUrl,omitempty"`
	Primary      *bool   `json:"primary,omitempty"`
	Type         *string `json:"type,omitempty"`
}
