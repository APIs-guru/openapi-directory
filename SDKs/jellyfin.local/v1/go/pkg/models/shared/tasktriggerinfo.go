package shared

type TaskTriggerInfo struct {
	DayOfWeek       *DayOfWeekEnum `json:"DayOfWeek"`
	IntervalTicks   *int64         `json:"IntervalTicks"`
	MaxRuntimeTicks *int64         `json:"MaxRuntimeTicks"`
	TimeOfDayTicks  *int64         `json:"TimeOfDayTicks"`
	Type            *string        `json:"Type"`
}
