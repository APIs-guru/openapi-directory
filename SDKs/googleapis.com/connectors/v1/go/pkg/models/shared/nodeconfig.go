package shared

// NodeConfig
// Configuration for the connection.
type NodeConfig struct {
	MaxNodeCount *int32 `json:"maxNodeCount,omitempty"`
	MinNodeCount *int32 `json:"minNodeCount,omitempty"`
}
