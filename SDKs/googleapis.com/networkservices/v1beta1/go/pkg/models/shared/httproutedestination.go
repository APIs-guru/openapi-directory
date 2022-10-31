package shared



type HTTPRouteDestination struct {
    ServiceName *string `json:"serviceName,omitempty"`
    Weight *int32 `json:"weight,omitempty"`
    
}

