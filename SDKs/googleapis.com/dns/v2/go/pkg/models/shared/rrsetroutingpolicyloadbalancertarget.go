package shared

type RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum string

const (
	RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "UNDEFINED"
	RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "TCP"
	RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP       RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "UDP"
)

type RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum string

const (
	RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone          RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "NONE"
	RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "REGIONAL_L4ILB"
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
