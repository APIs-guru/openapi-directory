package shared

// AutoUpgradeOptions
// AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
type AutoUpgradeOptions struct {
	AutoUpgradeStartTime *string `json:"autoUpgradeStartTime,omitempty"`
	Description          *string `json:"description,omitempty"`
}
