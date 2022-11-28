package shared

type HubStateEnum string

const (
	HubStateEnumStateUnspecified HubStateEnum = "STATE_UNSPECIFIED"
	HubStateEnumCreating         HubStateEnum = "CREATING"
	HubStateEnumActive           HubStateEnum = "ACTIVE"
	HubStateEnumDeleting         HubStateEnum = "DELETING"
	HubStateEnumUpdating         HubStateEnum = "UPDATING"
)

// HubInput
// Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
type HubInput struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}

// Hub
// Network Connectivity Center is a hub-and-spoke abstraction for network connectivity management in Google Cloud. It reduces operational complexity through a simple, centralized connectivity management model. Following is the resource message of a hub.
type Hub struct {
	CreateTime  *string           `json:"createTime,omitempty"`
	Description *string           `json:"description,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
	Spokes      []string          `json:"spokes,omitempty"`
	State       *HubStateEnum     `json:"state,omitempty"`
	UniqueID    *string           `json:"uniqueId,omitempty"`
	UpdateTime  *string           `json:"updateTime,omitempty"`
}
