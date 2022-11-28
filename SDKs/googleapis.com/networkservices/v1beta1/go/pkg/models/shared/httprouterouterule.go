package shared

// HTTPRouteRouteRule
// Specifies how to match traffic and how to route traffic when traffic is matched.
type HTTPRouteRouteRule struct {
	Action  *HTTPRouteRouteAction `json:"action,omitempty"`
	Matches []HTTPRouteRouteMatch `json:"matches,omitempty"`
}
