package shared



type Shipment struct {
    AllowedVehicles []string `json:"allowed_vehicles,omitempty"`
    Delivery Stop `json:"delivery"`
    DisallowedVehicles []string `json:"disallowed_vehicles,omitempty"`
    ID string `json:"id"`
    MaxTimeInVehicle *int64 `json:"max_time_in_vehicle,omitempty"`
    Name *string `json:"name,omitempty"`
    Pickup Stop `json:"pickup"`
    Priority *int32 `json:"priority,omitempty"`
    RequiredSkills []string `json:"required_skills,omitempty"`
    Size []int32 `json:"size,omitempty"`
    
}

