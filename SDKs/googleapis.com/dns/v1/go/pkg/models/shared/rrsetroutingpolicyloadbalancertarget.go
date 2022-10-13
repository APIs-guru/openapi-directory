package shared

type RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum string

const (
	RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "undefined"
	RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "tcp"
	RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "udp"
)

type RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum string

const (
	RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone          RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "none"
	RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4ilb RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "regionalL4ilb"
)

type RrSetRoutingPolicyLoadBalancerTarget struct {
	IPAddress        *string                                                   `json:"ipAddress"`
	IPProtocol       *RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum       `json:"ipProtocol"`
	Kind             *string                                                   `json:"kind"`
	LoadBalancerType *RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum `json:"loadBalancerType"`
	NetworkURL       *string                                                   `json:"networkUrl"`
	Port             *string                                                   `json:"port"`
	Project          *string                                                   `json:"project"`
	Region           *string                                                   `json:"region"`
}
