package shared

// SasPortalAssignment
// Associates `members` with a `role`.
type SasPortalAssignment struct {
	Members []string `json:"members,omitempty"`
	Role    *string  `json:"role,omitempty"`
}
