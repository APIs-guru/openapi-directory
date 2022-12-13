package shared

type ContactEditRequestTypesEnum string

const (
	ContactEditRequestTypesEnumBilling   ContactEditRequestTypesEnum = "billing"
	ContactEditRequestTypesEnumCompany   ContactEditRequestTypesEnum = "company"
	ContactEditRequestTypesEnumExecutive ContactEditRequestTypesEnum = "executive"
	ContactEditRequestTypesEnumOnline    ContactEditRequestTypesEnum = "online"
)

type ContactEditRequest struct {
	Email          *string                       `json:"email,omitempty"`
	FaxNumber      *string                       `json:"fax_number,omitempty"`
	FirstName      *string                       `json:"first_name,omitempty"`
	LastName       *string                       `json:"last_name,omitempty"`
	PhoneNumber    *string                       `json:"phone_number,omitempty"`
	PrimaryContact *bool                         `json:"primary_contact,omitempty"`
	Title          *string                       `json:"title,omitempty"`
	Types          []ContactEditRequestTypesEnum `json:"types,omitempty"`
}
