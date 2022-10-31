package shared



type AvailableUpdates struct {
    InPlaceUpdate *ApplianceVersion `json:"inPlaceUpdate,omitempty"`
    NewDeployableAppliance *ApplianceVersion `json:"newDeployableAppliance,omitempty"`
    
}

