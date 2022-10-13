package shared

type GrpcRouteRouteAction struct {
	Destinations         []GrpcRouteDestination         `json:"destinations"`
	FaultInjectionPolicy *GrpcRouteFaultInjectionPolicy `json:"faultInjectionPolicy"`
	RetryPolicy          *GrpcRouteRetryPolicy          `json:"retryPolicy"`
	Timeout              *string                        `json:"timeout"`
}
