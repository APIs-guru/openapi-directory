package shared




type FederationStateEnum string

const (
    FederationStateEnumStateUnspecified FederationStateEnum = "STATE_UNSPECIFIED"
FederationStateEnumCreating FederationStateEnum = "CREATING"
FederationStateEnumActive FederationStateEnum = "ACTIVE"
FederationStateEnumUpdating FederationStateEnum = "UPDATING"
FederationStateEnumDeleting FederationStateEnum = "DELETING"
FederationStateEnumError FederationStateEnum = "ERROR"
)


type Federation struct {
    BackendMetastores map[string]BackendMetastore `json:"backendMetastores,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    EndpointURI *string `json:"endpointUri,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *FederationStateEnum `json:"state,omitempty"`
    StateMessage *string `json:"stateMessage,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

