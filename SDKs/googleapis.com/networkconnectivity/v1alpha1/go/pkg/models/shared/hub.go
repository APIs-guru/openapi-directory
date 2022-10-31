package shared




type HubStateEnum string

const (
    HubStateEnumStateUnspecified HubStateEnum = "STATE_UNSPECIFIED"
HubStateEnumCreating HubStateEnum = "CREATING"
HubStateEnumActive HubStateEnum = "ACTIVE"
HubStateEnumDeleting HubStateEnum = "DELETING"
HubStateEnumUpdating HubStateEnum = "UPDATING"
)


type Hub struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Spokes []string `json:"spokes,omitempty"`
    State *HubStateEnum `json:"state,omitempty"`
    UniqueID *string `json:"uniqueId,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

