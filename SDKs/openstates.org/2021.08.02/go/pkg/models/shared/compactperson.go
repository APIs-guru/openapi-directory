package shared

type CompactPerson struct {
	CurrentRole *CurrentRole `json:"current_role,omitempty"`
	ID          string       `json:"id"`
	Name        string       `json:"name"`
	Party       string       `json:"party"`
}
