package shared

type SpokeStateEnum string

const (
	SpokeStateEnumStateUnspecified SpokeStateEnum = "STATE_UNSPECIFIED"
	SpokeStateEnumCreating         SpokeStateEnum = "CREATING"
	SpokeStateEnumActive           SpokeStateEnum = "ACTIVE"
	SpokeStateEnumDeleting         SpokeStateEnum = "DELETING"
	SpokeStateEnumUpdating         SpokeStateEnum = "UPDATING"
)

// SpokeInput
// A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
type SpokeInput struct {
	Description                    *string                              `json:"description,omitempty"`
	Hub                            *string                              `json:"hub,omitempty"`
	Labels                         map[string]string                    `json:"labels,omitempty"`
	LinkedInterconnectAttachments  *LinkedInterconnectAttachmentsInput  `json:"linkedInterconnectAttachments,omitempty"`
	LinkedRouterApplianceInstances *LinkedRouterApplianceInstancesInput `json:"linkedRouterApplianceInstances,omitempty"`
	LinkedVpnTunnels               *LinkedVpnTunnelsInput               `json:"linkedVpnTunnels,omitempty"`
	Name                           *string                              `json:"name,omitempty"`
}

// Spoke
// A Network Connectivity Center spoke represents a connection between your Google Cloud network resources and a non-Google-Cloud network. When you create a spoke, you associate it with a hub. You must also identify a value for exactly one of the following fields: * linked_vpn_tunnels * linked_interconnect_attachments * linked_router_appliance_instances
type Spoke struct {
	CreateTime                     *string                         `json:"createTime,omitempty"`
	Description                    *string                         `json:"description,omitempty"`
	Hub                            *string                         `json:"hub,omitempty"`
	Labels                         map[string]string               `json:"labels,omitempty"`
	LinkedInterconnectAttachments  *LinkedInterconnectAttachments  `json:"linkedInterconnectAttachments,omitempty"`
	LinkedRouterApplianceInstances *LinkedRouterApplianceInstances `json:"linkedRouterApplianceInstances,omitempty"`
	LinkedVpnTunnels               *LinkedVpnTunnels               `json:"linkedVpnTunnels,omitempty"`
	Name                           *string                         `json:"name,omitempty"`
	State                          *SpokeStateEnum                 `json:"state,omitempty"`
	UniqueID                       *string                         `json:"uniqueId,omitempty"`
	UpdateTime                     *string                         `json:"updateTime,omitempty"`
}
