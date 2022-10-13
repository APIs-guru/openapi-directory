package shared

type DriveTimeBreak struct {
	Duration           int64   `json:"duration"`
	InitialDrivingTime *int64  `json:"initial_driving_time"`
	MaxDrivingTime     int64   `json:"max_driving_time"`
	PossibleSplit      []int64 `json:"possible_split"`
}
