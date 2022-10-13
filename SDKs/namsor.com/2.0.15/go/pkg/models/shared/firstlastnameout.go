package shared

type FirstLastNameOut struct {
	FirstName *string `json:"firstName"`
	ID        *string `json:"id"`
	LastName  *string `json:"lastName"`
	Script    *string `json:"script"`
}
