package shared




type InstanceInstanceTypeEnum string

const (
    InstanceInstanceTypeEnumInstanceTypeUnspecified InstanceInstanceTypeEnum = "INSTANCE_TYPE_UNSPECIFIED"
InstanceInstanceTypeEnumProvisioned InstanceInstanceTypeEnum = "PROVISIONED"
InstanceInstanceTypeEnumFreeInstance InstanceInstanceTypeEnum = "FREE_INSTANCE"
)



type InstanceStateEnum string

const (
    InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
InstanceStateEnumCreating InstanceStateEnum = "CREATING"
InstanceStateEnumReady InstanceStateEnum = "READY"
)


type Instance struct {
    Config *string `json:"config,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    EndpointUris []string `json:"endpointUris,omitempty"`
    FreeInstanceMetadata *FreeInstanceMetadata `json:"freeInstanceMetadata,omitempty"`
    InstanceType *InstanceInstanceTypeEnum `json:"instanceType,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    NodeCount *int32 `json:"nodeCount,omitempty"`
    ProcessingUnits *int32 `json:"processingUnits,omitempty"`
    State *InstanceStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

