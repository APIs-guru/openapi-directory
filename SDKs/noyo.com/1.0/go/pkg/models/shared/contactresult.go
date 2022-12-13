package shared

type ContactResultTypesEnum string

const (
	ContactResultTypesEnumBilling   ContactResultTypesEnum = "billing"
	ContactResultTypesEnumCompany   ContactResultTypesEnum = "company"
	ContactResultTypesEnumExecutive ContactResultTypesEnum = "executive"
	ContactResultTypesEnumOnline    ContactResultTypesEnum = "online"
)

type ContactResult struct {
	Created        int64                    `json:"created"`
	Email          string                   `json:"email"`
	FaxNumber      string                   `json:"fax_number"`
	FirstName      *string                  `json:"first_name,omitempty"`
	GroupID        string                   `json:"group_id"`
	ID             string                   `json:"id"`
	LastName       *string                  `json:"last_name,omitempty"`
	Modified       int64                    `json:"modified"`
	PhoneNumber    string                   `json:"phone_number"`
	PrimaryContact bool                     `json:"primary_contact"`
	Title          string                   `json:"title"`
	Types          []ContactResultTypesEnum `json:"types"`
	Version        string                   `json:"version"`
}
