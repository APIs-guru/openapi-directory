package shared

type JobRelation struct {
	Ids       []string `json:"ids"`
	Type      string   `json:"type"`
	VehicleID *string  `json:"vehicle_id,omitempty"`
}
