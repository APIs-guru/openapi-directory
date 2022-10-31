package shared

type Sustainability struct {
	EnergyEfficiency             *EnergyEfficiency             `json:"energyEfficiency,omitempty"`
	SustainabilityCertifications *SustainabilityCertifications `json:"sustainabilityCertifications,omitempty"`
	SustainableSourcing          *SustainableSourcing          `json:"sustainableSourcing,omitempty"`
	WasteReduction               *WasteReduction               `json:"wasteReduction,omitempty"`
	WaterConservation            *WaterConservation            `json:"waterConservation,omitempty"`
}
