package shared

// HTTPRouteDestination
// Specifications of a destination to which the request should be routed to.
type HTTPRouteDestination struct {
	ServiceName *string `json:"serviceName,omitempty"`
	Weight      *int32  `json:"weight,omitempty"`
}
