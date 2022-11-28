package shared

// GrpcRouteRouteAction
// Specifies how to route matched traffic.
type GrpcRouteRouteAction struct {
	Destinations         []GrpcRouteDestination         `json:"destinations,omitempty"`
	FaultInjectionPolicy *GrpcRouteFaultInjectionPolicy `json:"faultInjectionPolicy,omitempty"`
	RetryPolicy          *GrpcRouteRetryPolicy          `json:"retryPolicy,omitempty"`
	Timeout              *string                        `json:"timeout,omitempty"`
}
