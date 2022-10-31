package shared



type ResolveServiceRequest struct {
    EndpointFilter *string `json:"endpointFilter,omitempty"`
    MaxEndpoints *int32 `json:"maxEndpoints,omitempty"`
    
}

