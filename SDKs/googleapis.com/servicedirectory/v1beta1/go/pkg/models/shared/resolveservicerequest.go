package shared

// ResolveServiceRequest
// The request message for LookupService.ResolveService. Looks up a service by its name, returns the service and its endpoints.
type ResolveServiceRequest struct {
	EndpointFilter *string `json:"endpointFilter,omitempty"`
	MaxEndpoints   *int32  `json:"maxEndpoints,omitempty"`
}
