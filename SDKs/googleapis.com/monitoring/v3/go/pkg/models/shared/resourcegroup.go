package shared

type ResourceGroupResourceTypeEnum string

const (
	ResourceGroupResourceTypeEnumResourceTypeUnspecified ResourceGroupResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
	ResourceGroupResourceTypeEnumInstance                ResourceGroupResourceTypeEnum = "INSTANCE"
	ResourceGroupResourceTypeEnumAwsElbLoadBalancer      ResourceGroupResourceTypeEnum = "AWS_ELB_LOAD_BALANCER"
)

// ResourceGroup
// The resource submessage for group checks. It can be used instead of a monitored resource, when multiple resources are being monitored.
type ResourceGroup struct {
	GroupID      *string                        `json:"groupId,omitempty"`
	ResourceType *ResourceGroupResourceTypeEnum `json:"resourceType,omitempty"`
}
