package shared



type GrpcRouteDestination struct {
    ServiceName *string `json:"serviceName,omitempty"`
    Weight *int32 `json:"weight,omitempty"`
    
}

