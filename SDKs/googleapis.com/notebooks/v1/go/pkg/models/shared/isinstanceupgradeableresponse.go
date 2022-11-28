package shared

// IsInstanceUpgradeableResponse
// Response for checking if a notebook instance is upgradeable.
type IsInstanceUpgradeableResponse struct {
	UpgradeImage   *string `json:"upgradeImage,omitempty"`
	UpgradeInfo    *string `json:"upgradeInfo,omitempty"`
	UpgradeVersion *string `json:"upgradeVersion,omitempty"`
	Upgradeable    *bool   `json:"upgradeable,omitempty"`
}
