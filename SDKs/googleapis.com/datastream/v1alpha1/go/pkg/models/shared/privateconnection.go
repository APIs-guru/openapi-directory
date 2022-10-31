package shared




type PrivateConnectionStateEnum string

const (
    PrivateConnectionStateEnumStateUnspecified PrivateConnectionStateEnum = "STATE_UNSPECIFIED"
PrivateConnectionStateEnumCreating PrivateConnectionStateEnum = "CREATING"
PrivateConnectionStateEnumCreated PrivateConnectionStateEnum = "CREATED"
PrivateConnectionStateEnumFailed PrivateConnectionStateEnum = "FAILED"
PrivateConnectionStateEnumDeleting PrivateConnectionStateEnum = "DELETING"
PrivateConnectionStateEnumFailedToDelete PrivateConnectionStateEnum = "FAILED_TO_DELETE"
)


type PrivateConnection struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Error *Error `json:"error,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *PrivateConnectionStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    VpcPeeringConfig *VpcPeeringConfig `json:"vpcPeeringConfig,omitempty"`
    
}

