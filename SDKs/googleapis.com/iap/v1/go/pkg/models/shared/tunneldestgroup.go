package shared

type TunnelDestGroup struct {
	Cidrs []string `json:"cidrs,omitempty"`
	Fqdns []string `json:"fqdns,omitempty"`
	Name  *string  `json:"name,omitempty"`
}
