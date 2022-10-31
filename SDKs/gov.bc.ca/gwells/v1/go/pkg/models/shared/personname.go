package shared

type PersonName struct {
	Name          *string               `json:"name,omitempty"`
	PersonGUID    *string               `json:"person_guid,omitempty"`
	Registrations []RegistrationsNumber `json:"registrations,omitempty"`
}
