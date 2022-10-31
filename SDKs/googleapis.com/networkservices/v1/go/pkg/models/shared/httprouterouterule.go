package shared

type HTTPRouteRouteRule struct {
	Action  *HTTPRouteRouteAction `json:"action,omitempty"`
	Matches []HTTPRouteRouteMatch `json:"matches,omitempty"`
}
