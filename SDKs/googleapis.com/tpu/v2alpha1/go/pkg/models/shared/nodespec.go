package shared

// NodeSpecInput
// Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
type NodeSpecInput struct {
	Node   *NodeInput `json:"node,omitempty"`
	NodeID *string    `json:"nodeId,omitempty"`
	Parent *string    `json:"parent,omitempty"`
}

// NodeSpec
// Details of the TPU node(s) being requested. Users can request either a single node or multiple nodes. NodeSpec provides the specification for node(s) to be created.
type NodeSpec struct {
	Node   *Node   `json:"node,omitempty"`
	NodeID *string `json:"nodeId,omitempty"`
	Parent *string `json:"parent,omitempty"`
}
