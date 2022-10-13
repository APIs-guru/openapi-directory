package shared

type NodeConfig struct {
	MaxNodeCount *int32 `json:"maxNodeCount"`
	MinNodeCount *int32 `json:"minNodeCount"`
}
