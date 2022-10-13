package shared

type ElectionOfficial struct {
	EmailAddress      *string `json:"emailAddress"`
	FaxNumber         *string `json:"faxNumber"`
	Name              *string `json:"name"`
	OfficePhoneNumber *string `json:"officePhoneNumber"`
	Title             *string `json:"title"`
}
