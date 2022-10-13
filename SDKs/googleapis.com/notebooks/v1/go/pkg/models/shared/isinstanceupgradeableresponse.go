package shared

type IsInstanceUpgradeableResponse struct {
	UpgradeImage   *string `json:"upgradeImage"`
	UpgradeInfo    *string `json:"upgradeInfo"`
	UpgradeVersion *string `json:"upgradeVersion"`
	Upgradeable    *bool   `json:"upgradeable"`
}
