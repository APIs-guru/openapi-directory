package shared

type CloudRunConfigLoadBalancerTypeEnum string

const (
	CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeUnspecified CloudRunConfigLoadBalancerTypeEnum = "LOAD_BALANCER_TYPE_UNSPECIFIED"
	CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeExternal    CloudRunConfigLoadBalancerTypeEnum = "LOAD_BALANCER_TYPE_EXTERNAL"
	CloudRunConfigLoadBalancerTypeEnumLoadBalancerTypeInternal    CloudRunConfigLoadBalancerTypeEnum = "LOAD_BALANCER_TYPE_INTERNAL"
)

type CloudRunConfig struct {
	Disabled         *bool                               `json:"disabled,omitempty"`
	LoadBalancerType *CloudRunConfigLoadBalancerTypeEnum `json:"loadBalancerType,omitempty"`
}
