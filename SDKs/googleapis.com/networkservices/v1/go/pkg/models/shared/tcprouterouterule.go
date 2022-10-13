package shared

type TCPRouteRouteRule struct {
	Action  *TCPRouteRouteAction `json:"action"`
	Matches []TCPRouteRouteMatch `json:"matches"`
}
