package shared

type MaintenanceExclusionOptionsScopeEnum string

const (
	MaintenanceExclusionOptionsScopeEnumNoUpgrades            MaintenanceExclusionOptionsScopeEnum = "NO_UPGRADES"
	MaintenanceExclusionOptionsScopeEnumNoMinorUpgrades       MaintenanceExclusionOptionsScopeEnum = "NO_MINOR_UPGRADES"
	MaintenanceExclusionOptionsScopeEnumNoMinorOrNodeUpgrades MaintenanceExclusionOptionsScopeEnum = "NO_MINOR_OR_NODE_UPGRADES"
)

// MaintenanceExclusionOptions
// Represents the Maintenance exclusion option.
type MaintenanceExclusionOptions struct {
	Scope *MaintenanceExclusionOptionsScopeEnum `json:"scope,omitempty"`
}
