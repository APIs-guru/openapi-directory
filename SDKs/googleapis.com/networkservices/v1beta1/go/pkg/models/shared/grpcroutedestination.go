package shared

// GrpcRouteDestination
// The destination to which traffic will be routed.
type GrpcRouteDestination struct {
	ServiceName *string `json:"serviceName,omitempty"`
	Weight      *int32  `json:"weight,omitempty"`
}
