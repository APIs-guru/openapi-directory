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
	Address        *string                     `json:"address"`
	ConfigID       *int64                      `json:"config_id"`
	ID             *int64                      `json:"id"`
	Label          *string                     `json:"label"`
	Mode           *NodeBalancerNodeModeEnum   `json:"mode"`
	NodebalancerID *int64                      `json:"nodebalancer_id"`
	Status         *NodeBalancerNodeStatusEnum `json:"status"`
	Weight         *int64                      `json:"weight"`
}
