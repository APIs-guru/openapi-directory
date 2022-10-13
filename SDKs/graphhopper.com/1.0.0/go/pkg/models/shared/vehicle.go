package shared

type Vehicle struct {
	Break            *interface{} `json:"break"`
	EarliestStart    *int64       `json:"earliest_start"`
	EndAddress       *Address     `json:"end_address"`
	LatestEnd        *int64       `json:"latest_end"`
	MaxActivities    *int32       `json:"max_activities"`
	MaxDistance      *int64       `json:"max_distance"`
	MaxDrivingTime   *int64       `json:"max_driving_time"`
	MaxJobs          *int32       `json:"max_jobs"`
	MinJobs          *int32       `json:"min_jobs"`
	MoveToEndAddress *bool        `json:"move_to_end_address"`
	ReturnToDepot    *bool        `json:"return_to_depot"`
	Skills           []string     `json:"skills"`
	StartAddress     Address      `json:"start_address"`
	TypeID           *string      `json:"type_id"`
	VehicleID        string       `json:"vehicle_id"`
}
