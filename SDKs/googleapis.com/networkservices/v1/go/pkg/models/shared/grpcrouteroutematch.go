package shared



type GrpcRouteRouteMatch struct {
    Headers []GrpcRouteHeaderMatch `json:"headers,omitempty"`
    Method *GrpcRouteMethodMatch `json:"method,omitempty"`
    
}

