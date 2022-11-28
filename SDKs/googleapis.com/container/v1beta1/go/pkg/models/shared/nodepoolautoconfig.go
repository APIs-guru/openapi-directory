package shared

// NodePoolAutoConfig
// node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
type NodePoolAutoConfig struct {
	NetworkTags *NetworkTags `json:"networkTags,omitempty"`
}
