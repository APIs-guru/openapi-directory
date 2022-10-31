package shared




type ResourceGroupResourceTypeEnum string

const (
    ResourceGroupResourceTypeEnumResourceTypeUnspecified ResourceGroupResourceTypeEnum = "RESOURCE_TYPE_UNSPECIFIED"
ResourceGroupResourceTypeEnumInstance ResourceGroupResourceTypeEnum = "INSTANCE"
ResourceGroupResourceTypeEnumAwsElbLoadBalancer ResourceGroupResourceTypeEnum = "AWS_ELB_LOAD_BALANCER"
)


type ResourceGroup struct {
    GroupID *string `json:"groupId,omitempty"`
    ResourceType *ResourceGroupResourceTypeEnum `json:"resourceType,omitempty"`
    
}

