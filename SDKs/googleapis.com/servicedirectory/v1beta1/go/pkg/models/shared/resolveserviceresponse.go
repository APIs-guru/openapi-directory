package shared

// ResolveServiceResponse
// The response message for LookupService.ResolveService.
type ResolveServiceResponse struct {
	Service *Service `json:"service,omitempty"`
}
