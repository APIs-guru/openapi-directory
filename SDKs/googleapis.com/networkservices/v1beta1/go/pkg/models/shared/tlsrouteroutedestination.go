package shared

// TLSRouteRouteDestination
// Describe the destination for traffic to be routed to.
type TLSRouteRouteDestination struct {
	ServiceName *string `json:"serviceName,omitempty"`
	Weight      *int32  `json:"weight,omitempty"`
}
