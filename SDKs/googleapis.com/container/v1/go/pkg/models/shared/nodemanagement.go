package shared

type NodeManagement struct {
	AutoRepair     *bool               `json:"autoRepair"`
	AutoUpgrade    *bool               `json:"autoUpgrade"`
	UpgradeOptions *AutoUpgradeOptions `json:"upgradeOptions"`
}
