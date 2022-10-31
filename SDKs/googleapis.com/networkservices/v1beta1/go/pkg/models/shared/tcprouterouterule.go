package shared

type TCPRouteRouteRule struct {
	Action  *TCPRouteRouteAction `json:"action,omitempty"`
	Matches []TCPRouteRouteMatch `json:"matches,omitempty"`
}
