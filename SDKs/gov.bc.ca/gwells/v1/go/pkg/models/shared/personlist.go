package shared

type PersonList struct {
	ContactCell   *string             `json:"contact_cell"`
	ContactEmail  *string             `json:"contact_email"`
	ContactTel    *string             `json:"contact_tel"`
	FirstName     string              `json:"first_name"`
	PersonGUID    *string             `json:"person_guid"`
	Registrations []RegistrationsList `json:"registrations"`
	Surname       string              `json:"surname"`
}
