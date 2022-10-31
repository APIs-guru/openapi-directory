package shared

type ScopeMappingRepresentation struct {
	Client      *string  `json:"client,omitempty"`
	ClientScope *string  `json:"clientScope,omitempty"`
	Roles       []string `json:"roles,omitempty"`
	Self        *string  `json:"self,omitempty"`
}
