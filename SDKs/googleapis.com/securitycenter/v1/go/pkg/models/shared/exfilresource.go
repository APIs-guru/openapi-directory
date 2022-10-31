package shared

type ExfilResource struct {
	Components []string `json:"components,omitempty"`
	Name       *string  `json:"name,omitempty"`
}
