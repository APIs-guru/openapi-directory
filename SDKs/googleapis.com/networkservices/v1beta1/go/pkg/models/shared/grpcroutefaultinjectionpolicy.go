package shared

// GrpcRouteFaultInjectionPolicy
// The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced on a percentage of requests before sending those requests to the destination service. Similarly requests from clients can be aborted by for a percentage of requests.
type GrpcRouteFaultInjectionPolicy struct {
	Abort *GrpcRouteFaultInjectionPolicyAbort `json:"abort,omitempty"`
	Delay *GrpcRouteFaultInjectionPolicyDelay `json:"delay,omitempty"`
}
