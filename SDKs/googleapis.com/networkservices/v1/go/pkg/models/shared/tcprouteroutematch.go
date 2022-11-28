package shared

// TCPRouteRouteMatch
// RouteMatch defines the predicate used to match requests to a given action. Multiple match types are "OR"ed for evaluation. If no routeMatch field is specified, this rule will unconditionally match traffic.
type TCPRouteRouteMatch struct {
	Address *string `json:"address,omitempty"`
	Port    *string `json:"port,omitempty"`
}
