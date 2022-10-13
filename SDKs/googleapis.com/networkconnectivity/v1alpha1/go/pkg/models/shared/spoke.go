package shared

type SpokeStateEnum string

const (
	SpokeStateEnumStateUnspecified SpokeStateEnum = "STATE_UNSPECIFIED"
	SpokeStateEnumCreating         SpokeStateEnum = "CREATING"
	SpokeStateEnumActive           SpokeStateEnum = "ACTIVE"
	SpokeStateEnumDeleting         SpokeStateEnum = "DELETING"
	SpokeStateEnumUpdating         SpokeStateEnum = "UPDATING"
)

type Spoke struct {
	CreateTime                     *string                   `json:"createTime"`
	Description                    *string                   `json:"description"`
	Hub                            *string                   `json:"hub"`
	Labels                         map[string]string         `json:"labels"`
	LinkedInterconnectAttachments  []string                  `json:"linkedInterconnectAttachments"`
	LinkedRouterApplianceInstances []RouterApplianceInstance `json:"linkedRouterApplianceInstances"`
	LinkedVpnTunnels               []string                  `json:"linkedVpnTunnels"`
	Name                           *string                   `json:"name"`
	State                          *SpokeStateEnum           `json:"state"`
	UniqueID                       *string                   `json:"uniqueId"`
	UpdateTime                     *string                   `json:"updateTime"`
}
