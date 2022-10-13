package shared

type EmailAddress struct {
	CustomType   *string `json:"customType"`
	EmailAddress *string `json:"emailAddress"`
	EmailURL     *string `json:"emailUrl"`
	Primary      *bool   `json:"primary"`
	Type         *string `json:"type"`
}
