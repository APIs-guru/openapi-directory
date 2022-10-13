package shared

type Schedule struct {
	IntervalDurationDays *int32  `json:"intervalDurationDays"`
	ScheduleTime         *string `json:"scheduleTime"`
}
