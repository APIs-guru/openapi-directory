package shared




type RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum string

const (
    RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUndefined RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "UNDEFINED"
RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumTCP RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "TCP"
RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnumUDP RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum = "UDP"
)



type RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum string

const (
    RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumNone RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "NONE"
RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnumRegionalL4Ilb RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum = "REGIONAL_L4ILB"
)


type RrSetRoutingPolicyLoadBalancerTarget struct {
    IPAddress *string `json:"ipAddress,omitempty"`
    IPProtocol *RrSetRoutingPolicyLoadBalancerTargetIPProtocolEnum `json:"ipProtocol,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LoadBalancerType *RrSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum `json:"loadBalancerType,omitempty"`
    NetworkURL *string `json:"networkUrl,omitempty"`
    Port *string `json:"port,omitempty"`
    Project *string `json:"project,omitempty"`
    Region *string `json:"region,omitempty"`
    
}

