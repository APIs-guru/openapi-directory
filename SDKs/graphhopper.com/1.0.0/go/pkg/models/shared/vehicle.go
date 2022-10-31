package shared

type Vehicle struct {
	Break            *interface{} `json:"break,omitempty"`
	EarliestStart    *int64       `json:"earliest_start,omitempty"`
	EndAddress       *Address     `json:"end_address,omitempty"`
	LatestEnd        *int64       `json:"latest_end,omitempty"`
	MaxActivities    *int32       `json:"max_activities,omitempty"`
	MaxDistance      *int64       `json:"max_distance,omitempty"`
	MaxDrivingTime   *int64       `json:"max_driving_time,omitempty"`
	MaxJobs          *int32       `json:"max_jobs,omitempty"`
	MinJobs          *int32       `json:"min_jobs,omitempty"`
	MoveToEndAddress *bool        `json:"move_to_end_address,omitempty"`
	ReturnToDepot    *bool        `json:"return_to_depot,omitempty"`
	Skills           []string     `json:"skills,omitempty"`
	StartAddress     Address      `json:"start_address"`
	TypeID           *string      `json:"type_id,omitempty"`
	VehicleID        string       `json:"vehicle_id"`
}
