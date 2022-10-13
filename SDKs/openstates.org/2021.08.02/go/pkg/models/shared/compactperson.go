package shared

type CompactPerson struct {
	CurrentRole *CurrentRole `json:"current_role"`
	ID          string       `json:"id"`
	Name        string       `json:"name"`
	Party       string       `json:"party"`
}
