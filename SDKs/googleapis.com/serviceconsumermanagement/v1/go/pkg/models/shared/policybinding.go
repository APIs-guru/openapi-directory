package shared

type PolicyBinding struct {
	Members []string `json:"members,omitempty"`
	Role    *string  `json:"role,omitempty"`
}
