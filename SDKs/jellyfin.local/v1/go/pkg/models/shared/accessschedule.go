package shared

// AccessSchedule
// An entity representing a user's access schedule.
type AccessSchedule struct {
	DayOfWeek DynamicDayOfWeekEnum `json:"DayOfWeek"`
	EndHour   float64              `json:"EndHour"`
	ID        int32                `json:"Id"`
	StartHour float64              `json:"StartHour"`
	UserID    string               `json:"UserId"`
}

// AccessScheduleInput
// An entity representing a user's access schedule.
type AccessScheduleInput struct {
	DayOfWeek DynamicDayOfWeekEnum `json:"DayOfWeek"`
	EndHour   float64              `json:"EndHour"`
	StartHour float64              `json:"StartHour"`
}
