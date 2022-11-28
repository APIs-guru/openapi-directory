package shared

// TLSRouteRouteMatch
// RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "AND"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
type TLSRouteRouteMatch struct {
	Alpn    []string `json:"alpn,omitempty"`
	SniHost []string `json:"sniHost,omitempty"`
}
