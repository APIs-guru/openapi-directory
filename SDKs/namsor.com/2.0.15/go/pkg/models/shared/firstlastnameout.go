package shared

// FirstLastNameOut
// First / last name structure corresponding to the most likely parsing.
type FirstLastNameOut struct {
	FirstName *string `json:"firstName,omitempty"`
	ID        *string `json:"id,omitempty"`
	LastName  *string `json:"lastName,omitempty"`
	Script    *string `json:"script,omitempty"`
}
