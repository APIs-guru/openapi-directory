package shared

type TunnelDestGroup struct {
	Cidrs []string `json:"cidrs"`
	Fqdns []string `json:"fqdns"`
	Name  *string  `json:"name"`
}
