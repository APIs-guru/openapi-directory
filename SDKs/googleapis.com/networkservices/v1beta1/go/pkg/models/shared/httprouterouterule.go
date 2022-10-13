package shared

type HTTPRouteRouteRule struct {
	Action  *HTTPRouteRouteAction `json:"action"`
	Matches []HTTPRouteRouteMatch `json:"matches"`
}
