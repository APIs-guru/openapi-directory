package shared

type PolicyBinding struct {
	Members []string `json:"members"`
	Role    *string  `json:"role"`
}
