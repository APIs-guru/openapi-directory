package shared

type InstanceInstanceTypeEnum string

const (
	InstanceInstanceTypeEnumInstanceTypeUnspecified InstanceInstanceTypeEnum = "INSTANCE_TYPE_UNSPECIFIED"
	InstanceInstanceTypeEnumProvisioned             InstanceInstanceTypeEnum = "PROVISIONED"
	InstanceInstanceTypeEnumFreeInstance            InstanceInstanceTypeEnum = "FREE_INSTANCE"
)

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumCreating         InstanceStateEnum = "CREATING"
	InstanceStateEnumReady            InstanceStateEnum = "READY"
)

type Instance struct {
	Config               *string                   `json:"config"`
	CreateTime           *string                   `json:"createTime"`
	DisplayName          *string                   `json:"displayName"`
	EndpointUris         []string                  `json:"endpointUris"`
	FreeInstanceMetadata *FreeInstanceMetadata     `json:"freeInstanceMetadata"`
	InstanceType         *InstanceInstanceTypeEnum `json:"instanceType"`
	Labels               map[string]string         `json:"labels"`
	Name                 *string                   `json:"name"`
	NodeCount            *int32                    `json:"nodeCount"`
	ProcessingUnits      *int32                    `json:"processingUnits"`
	State                *InstanceStateEnum        `json:"state"`
	UpdateTime           *string                   `json:"updateTime"`
}
