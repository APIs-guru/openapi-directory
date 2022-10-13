package shared

type SasPortalAssignment struct {
	Members []string `json:"members"`
	Role    *string  `json:"role"`
}
