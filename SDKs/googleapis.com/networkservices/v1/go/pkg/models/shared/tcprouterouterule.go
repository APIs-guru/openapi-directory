package shared

// TCPRouteRouteRule
// Specifies how to match traffic and how to route traffic when traffic is matched.
type TCPRouteRouteRule struct {
	Action  *TCPRouteRouteAction `json:"action,omitempty"`
	Matches []TCPRouteRouteMatch `json:"matches,omitempty"`
}
