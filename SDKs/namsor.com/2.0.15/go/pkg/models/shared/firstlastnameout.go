package shared

type FirstLastNameOut struct {
	FirstName *string `json:"firstName,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
	Script    *string `json:"script,omitempty"`
}
