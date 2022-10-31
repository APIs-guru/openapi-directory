package shared



type Request struct {
    Algorithm *Algorithm `json:"algorithm,omitempty"`
    Configuration *Configuration `json:"configuration,omitempty"`
    CostMatrices []CostMatrix `json:"cost_matrices,omitempty"`
    Objectives []Objective `json:"objectives,omitempty"`
    Relations []interface{} `json:"relations,omitempty"`
    Services []Service `json:"services,omitempty"`
    Shipments []Shipment `json:"shipments,omitempty"`
    VehicleTypes []VehicleType `json:"vehicle_types,omitempty"`
    Vehicles []Vehicle `json:"vehicles,omitempty"`
    
}

