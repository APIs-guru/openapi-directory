package shared



type NodeManagement struct {
    AutoRepair *bool `json:"autoRepair,omitempty"`
    AutoUpgrade *bool `json:"autoUpgrade,omitempty"`
    UpgradeOptions *AutoUpgradeOptions `json:"upgradeOptions,omitempty"`
    
}

