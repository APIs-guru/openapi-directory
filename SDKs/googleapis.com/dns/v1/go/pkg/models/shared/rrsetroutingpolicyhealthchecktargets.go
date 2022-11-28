package shared

// RrSetRoutingPolicyHealthCheckTargets
// HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response.
type RrSetRoutingPolicyHealthCheckTargets struct {
	InternalLoadBalancers []RrSetRoutingPolicyLoadBalancerTarget `json:"internalLoadBalancers,omitempty"`
}
