package shared

// HTTPRouteFaultInjectionPolicy
// The specification for fault injection introduced into traffic to test the resiliency of clients to destination service failure. As part of fault injection, when clients send requests to a destination, delays can be introduced by client proxy on a percentage of requests before sending those requests to the destination service. Similarly requests can be aborted by client proxy for a percentage of requests.
type HTTPRouteFaultInjectionPolicy struct {
	Abort *HTTPRouteFaultInjectionPolicyAbort `json:"abort,omitempty"`
	Delay *HTTPRouteFaultInjectionPolicyDelay `json:"delay,omitempty"`
}
