package shared

type Shipment struct {
	AllowedVehicles    []string `json:"allowed_vehicles"`
	Delivery           Stop     `json:"delivery"`
	DisallowedVehicles []string `json:"disallowed_vehicles"`
	ID                 string   `json:"id"`
	MaxTimeInVehicle   *int64   `json:"max_time_in_vehicle"`
	Name               *string  `json:"name"`
	Pickup             Stop     `json:"pickup"`
	Priority           *int32   `json:"priority"`
	RequiredSkills     []string `json:"required_skills"`
	Size               []int32  `json:"size"`
}
