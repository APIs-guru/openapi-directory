package shared

type ScopeMappingRepresentation struct {
	Client      *string  `json:"client"`
	ClientScope *string  `json:"clientScope"`
	Roles       []string `json:"roles"`
	Self        *string  `json:"self"`
}
