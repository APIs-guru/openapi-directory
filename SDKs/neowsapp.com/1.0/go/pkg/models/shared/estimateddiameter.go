package shared

type EstimatedDiameter struct {
	EstimatedDiameterMax *float64 `json:"estimated_diameter_max,omitempty"`
	EstimatedDiameterMin *float64 `json:"estimated_diameter_min,omitempty"`
}
