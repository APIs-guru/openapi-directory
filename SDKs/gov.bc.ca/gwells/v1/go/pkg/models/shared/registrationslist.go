package shared

type RegistrationsList struct {
	Activity            *string           `json:"activity"`
	ActivityDescription *string           `json:"activity_description"`
	Applications        []ApplicationList `json:"applications"`
	Organization        OrganizationList  `json:"organization"`
	RegistrationNo      *string           `json:"registration_no"`
}
