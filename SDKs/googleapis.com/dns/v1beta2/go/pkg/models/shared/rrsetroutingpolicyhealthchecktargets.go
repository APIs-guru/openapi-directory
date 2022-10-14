package shared

type RrSetRoutingPolicyHealthCheckTargets struct {
	InternalLoadBalancers []RrSetRoutingPolicyLoadBalancerTarget `json:"internalLoadBalancers,omitempty"`
}
