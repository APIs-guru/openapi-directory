package shared

// TCPRouteRouteDestination
// Describe the destination for traffic to be routed to.
type TCPRouteRouteDestination struct {
	ServiceName *string `json:"serviceName,omitempty"`
	Weight      *int32  `json:"weight,omitempty"`
}
