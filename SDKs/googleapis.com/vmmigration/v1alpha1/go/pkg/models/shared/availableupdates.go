package shared

// AvailableUpdates
// Holds informatiom about the available versions for upgrade.
type AvailableUpdates struct {
	InPlaceUpdate          *ApplianceVersion `json:"inPlaceUpdate,omitempty"`
	NewDeployableAppliance *ApplianceVersion `json:"newDeployableAppliance,omitempty"`
}
