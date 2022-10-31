package shared

type TaskTriggerInfo struct {
	DayOfWeek       *DayOfWeekEnum `json:"DayOfWeek,omitempty"`
	IntervalTicks   *int64         `json:"IntervalTicks,omitempty"`
	MaxRuntimeTicks *int64         `json:"MaxRuntimeTicks,omitempty"`
	TimeOfDayTicks  *int64         `json:"TimeOfDayTicks,omitempty"`
	Type            *string        `json:"Type,omitempty"`
}
