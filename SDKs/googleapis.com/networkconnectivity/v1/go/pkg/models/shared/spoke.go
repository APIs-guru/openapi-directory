package shared




type SpokeStateEnum string

const (
    SpokeStateEnumStateUnspecified SpokeStateEnum = "STATE_UNSPECIFIED"
SpokeStateEnumCreating SpokeStateEnum = "CREATING"
SpokeStateEnumActive SpokeStateEnum = "ACTIVE"
SpokeStateEnumDeleting SpokeStateEnum = "DELETING"
SpokeStateEnumUpdating SpokeStateEnum = "UPDATING"
)


type Spoke struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Hub *string `json:"hub,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LinkedInterconnectAttachments *LinkedInterconnectAttachments `json:"linkedInterconnectAttachments,omitempty"`
    LinkedRouterApplianceInstances *LinkedRouterApplianceInstances `json:"linkedRouterApplianceInstances,omitempty"`
    LinkedVpnTunnels *LinkedVpnTunnels `json:"linkedVpnTunnels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *SpokeStateEnum `json:"state,omitempty"`
    UniqueID *string `json:"uniqueId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

