package shared

// NodeManagement
// NodeManagement defines the set of node management services turned on for the node pool.
type NodeManagement struct {
	AutoRepair     *bool               `json:"autoRepair,omitempty"`
	AutoUpgrade    *bool               `json:"autoUpgrade,omitempty"`
	UpgradeOptions *AutoUpgradeOptions `json:"upgradeOptions,omitempty"`
}
