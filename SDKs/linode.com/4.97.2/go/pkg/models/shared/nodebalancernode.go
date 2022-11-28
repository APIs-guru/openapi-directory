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

// NodeBalancerNode
// A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
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

// NodeBalancerNodeInput
// A NodeBalancerNode represents a single backend serving requests for a single port of a NodeBalancer.  Nodes are specific to NodeBalancer Configs, and serve traffic over their private IP.  If the same Linode is serving traffic for more than one port on the same NodeBalancer, one NodeBalancer Node is required for each config (port) it should serve requests on.  For example, if you have four backends, and each should response to both HTTP and HTTPS requests, you will need two NodeBalancerConfigs (port 80 and port 443) and four backends each - one for each of the Linodes serving requests for that port.
type NodeBalancerNodeInput struct {
	Address *string                   `json:"address,omitempty"`
	Label   *string                   `json:"label,omitempty"`
	Mode    *NodeBalancerNodeModeEnum `json:"mode,omitempty"`
	Weight  *int64                    `json:"weight,omitempty"`
}
