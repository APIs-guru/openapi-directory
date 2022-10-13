package shared

type Stop struct {
	Address         *Address     `json:"address"`
	Duration        *int64       `json:"duration"`
	Group           *string      `json:"group"`
	PreparationTime *int64       `json:"preparation_time"`
	TimeWindows     []TimeWindow `json:"time_windows"`
}
