package shared

type ContactCreateRequestTypesEnum string

const (
	ContactCreateRequestTypesEnumBilling   ContactCreateRequestTypesEnum = "billing"
	ContactCreateRequestTypesEnumCompany   ContactCreateRequestTypesEnum = "company"
	ContactCreateRequestTypesEnumExecutive ContactCreateRequestTypesEnum = "executive"
	ContactCreateRequestTypesEnumOnline    ContactCreateRequestTypesEnum = "online"
)

type ContactCreateRequest struct {
	Email          string                          `json:"email"`
	FaxNumber      *string                         `json:"fax_number,omitempty"`
	FirstName      string                          `json:"first_name"`
	LastName       string                          `json:"last_name"`
	PhoneNumber    *string                         `json:"phone_number,omitempty"`
	PrimaryContact *bool                           `json:"primary_contact,omitempty"`
	Title          *string                         `json:"title,omitempty"`
	Types          []ContactCreateRequestTypesEnum `json:"types"`
}
