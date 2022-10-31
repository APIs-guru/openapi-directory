package shared



type PersonList struct {
    ContactCell *string `json:"contact_cell,omitempty"`
    ContactEmail *string `json:"contact_email,omitempty"`
    ContactTel *string `json:"contact_tel,omitempty"`
    FirstName string `json:"first_name"`
    PersonGUID *string `json:"person_guid,omitempty"`
    Registrations []RegistrationsList `json:"registrations,omitempty"`
    Surname string `json:"surname"`
    
}

