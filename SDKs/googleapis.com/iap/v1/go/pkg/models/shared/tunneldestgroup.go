package shared

// TunnelDestGroup
// A TunnelDestGroup.
type TunnelDestGroup struct {
	Cidrs []string `json:"cidrs,omitempty"`
	Fqdns []string `json:"fqdns,omitempty"`
	Name  *string  `json:"name,omitempty"`
}
