package shared



type GrpcRouteRouteRule struct {
    Action *GrpcRouteRouteAction `json:"action,omitempty"`
    Matches []GrpcRouteRouteMatch `json:"matches,omitempty"`
    
}

