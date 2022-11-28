package shared

// ExfilResource
// Resource that has been exfiltrated or exfiltrated_to.
type ExfilResource struct {
	Components []string `json:"components,omitempty"`
	Name       *string  `json:"name,omitempty"`
}
