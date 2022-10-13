package shared

type TLSRouteRouteMatch struct {
	Alpn    []string `json:"alpn"`
	SniHost []string `json:"sniHost"`
}
