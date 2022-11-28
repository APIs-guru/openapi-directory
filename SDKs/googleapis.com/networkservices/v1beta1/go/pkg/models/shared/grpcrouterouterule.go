package shared

// GrpcRouteRouteRule
// Describes how to route traffic.
type GrpcRouteRouteRule struct {
	Action  *GrpcRouteRouteAction `json:"action,omitempty"`
	Matches []GrpcRouteRouteMatch `json:"matches,omitempty"`
}
