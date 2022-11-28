package shared

type SpokeStateEnum string

const (
	SpokeStateEnumStateUnspecified SpokeStateEnum = "STATE_UNSPECIFIED"
	SpokeStateEnumCreating         SpokeStateEnum = "CREATING"
	SpokeStateEnumActive           SpokeStateEnum = "ACTIVE"
	SpokeStateEnumDeleting         SpokeStateEnum = "DELETING"
	SpokeStateEnumUpdating         SpokeStateEnum = "UPDATING"
)

// Spoke
// A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
type Spoke struct {
	CreateTime                     *string                   `json:"createTime,omitempty"`
	Description                    *string                   `json:"description,omitempty"`
	Hub                            *string                   `json:"hub,omitempty"`
	Labels                         map[string]string         `json:"labels,omitempty"`
	LinkedInterconnectAttachments  []string                  `json:"linkedInterconnectAttachments,omitempty"`
	LinkedRouterApplianceInstances []RouterApplianceInstance `json:"linkedRouterApplianceInstances,omitempty"`
	LinkedVpnTunnels               []string                  `json:"linkedVpnTunnels,omitempty"`
	Name                           *string                   `json:"name,omitempty"`
	State                          *SpokeStateEnum           `json:"state,omitempty"`
	UniqueID                       *string                   `json:"uniqueId,omitempty"`
	UpdateTime                     *string                   `json:"updateTime,omitempty"`
}

// SpokeInput
// A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.
type SpokeInput struct {
	CreateTime                     *string                   `json:"createTime,omitempty"`
	Description                    *string                   `json:"description,omitempty"`
	Hub                            *string                   `json:"hub,omitempty"`
	Labels                         map[string]string         `json:"labels,omitempty"`
	LinkedInterconnectAttachments  []string                  `json:"linkedInterconnectAttachments,omitempty"`
	LinkedRouterApplianceInstances []RouterApplianceInstance `json:"linkedRouterApplianceInstances,omitempty"`
	LinkedVpnTunnels               []string                  `json:"linkedVpnTunnels,omitempty"`
	Name                           *string                   `json:"name,omitempty"`
	UpdateTime                     *string                   `json:"updateTime,omitempty"`
}
