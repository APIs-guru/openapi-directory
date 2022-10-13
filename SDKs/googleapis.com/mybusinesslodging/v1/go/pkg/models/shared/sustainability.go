package shared

type Sustainability struct {
	EnergyEfficiency             *EnergyEfficiency             `json:"energyEfficiency"`
	SustainabilityCertifications *SustainabilityCertifications `json:"sustainabilityCertifications"`
	SustainableSourcing          *SustainableSourcing          `json:"sustainableSourcing"`
	WasteReduction               *WasteReduction               `json:"wasteReduction"`
	WaterConservation            *WaterConservation            `json:"waterConservation"`
}
