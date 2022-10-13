package shared

type PersonName struct {
	Name          *string               `json:"name"`
	PersonGUID    *string               `json:"person_guid"`
	Registrations []RegistrationsNumber `json:"registrations"`
}
