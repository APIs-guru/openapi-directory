package shared

type NodeBalancerNodeModeEnum string

const (
	NodeBalancerNodeModeEnumAccept NodeBalancerNodeModeEnum = "accept"
	NodeBalancerNodeModeEnumReject NodeBalancerNodeModeEnum = "reject"
	NodeBalancerNodeModeEnumDrain  NodeBalancerNodeModeEnum = "drain"
	NodeBalancerNodeModeEnumBackup NodeBalancerNodeModeEnum = "backup"
)

type NodeBalancerNodeStatusEnum string

const (
	NodeBalancerNodeStatusEnumUnknown NodeBalancerNodeStatusEnum = "unknown"
	NodeBalancerNodeStatusEnumUp      NodeBalancerNodeStatusEnum = "UP"
	NodeBalancerNodeStatusEnumDown    NodeBalancerNodeStatusEnum = "DOWN"
)

type NodeBalancerNode struct {
	Address        *string                     `json:"address,omitempty"`
	ConfigID       *int64                      `json:"config_id,omitempty"`
	ID             *int64                      `json:"id,omitempty"`
	Label          *string                     `json:"label,omitempty"`
	Mode           *NodeBalancerNodeModeEnum   `json:"mode,omitempty"`
	NodebalancerID *int64                      `json:"nodebalancer_id,omitempty"`
	Status         *NodeBalancerNodeStatusEnum `json:"status,omitempty"`
	Weight         *int64                      `json:"weight,omitempty"`
}
