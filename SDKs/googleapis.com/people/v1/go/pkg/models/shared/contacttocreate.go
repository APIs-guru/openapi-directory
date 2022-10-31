package shared

type ContactToCreate struct {
	ContactPerson *Person `json:"contactPerson,omitempty"`
}
