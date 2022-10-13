package shared

type AvailableUpdates struct {
	InPlaceUpdate          *ApplianceVersion `json:"inPlaceUpdate"`
	NewDeployableAppliance *ApplianceVersion `json:"newDeployableAppliance"`
}
