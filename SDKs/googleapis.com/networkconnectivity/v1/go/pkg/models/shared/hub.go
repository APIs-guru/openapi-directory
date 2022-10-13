package shared

type HubStateEnum string

const (
	HubStateEnumStateUnspecified HubStateEnum = "STATE_UNSPECIFIED"
	HubStateEnumCreating         HubStateEnum = "CREATING"
	HubStateEnumActive           HubStateEnum = "ACTIVE"
	HubStateEnumDeleting         HubStateEnum = "DELETING"
	HubStateEnumUpdating         HubStateEnum = "UPDATING"
)

type Hub struct {
	CreateTime  *string           `json:"createTime"`
	Description *string           `json:"description"`
	Labels      map[string]string `json:"labels"`
	Name        *string           `json:"name"`
	RoutingVpcs []RoutingVpc      `json:"routingVpcs"`
	State       *HubStateEnum     `json:"state"`
	UniqueID    *string           `json:"uniqueId"`
	UpdateTime  *string           `json:"updateTime"`
}
