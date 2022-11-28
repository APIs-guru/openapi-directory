package shared

// GrpcRouteRouteMatch
// Criteria for matching traffic. A RouteMatch will be considered to match when all supplied fields match.
type GrpcRouteRouteMatch struct {
	Headers []GrpcRouteHeaderMatch `json:"headers,omitempty"`
	Method  *GrpcRouteMethodMatch  `json:"method,omitempty"`
}
