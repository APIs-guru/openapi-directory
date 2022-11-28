package shared

// TLSRouteRouteRule
// Specifies how to match traffic and how to route traffic when traffic is matched.
type TLSRouteRouteRule struct {
	Action  *TLSRouteRouteAction `json:"action,omitempty"`
	Matches []TLSRouteRouteMatch `json:"matches,omitempty"`
}
