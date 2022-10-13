package shared

type Request struct {
	Algorithm     *Algorithm     `json:"algorithm"`
	Configuration *Configuration `json:"configuration"`
	CostMatrices  []CostMatrix   `json:"cost_matrices"`
	Objectives    []Objective    `json:"objectives"`
	Relations     []interface{}  `json:"relations"`
	Services      []Service      `json:"services"`
	Shipments     []Shipment     `json:"shipments"`
	VehicleTypes  []VehicleType  `json:"vehicle_types"`
	Vehicles      []Vehicle      `json:"vehicles"`
}
