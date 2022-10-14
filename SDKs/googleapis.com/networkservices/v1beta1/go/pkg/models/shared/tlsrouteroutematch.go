package shared

type TLSRouteRouteMatch struct {
	Alpn    []string `json:"alpn,omitempty"`
	SniHost []string `json:"sniHost,omitempty"`
}
