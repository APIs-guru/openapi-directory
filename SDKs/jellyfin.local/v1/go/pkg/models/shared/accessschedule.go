package shared

type AccessSchedule struct {
	DayOfWeek DynamicDayOfWeekEnum `json:"DayOfWeek"`
	EndHour   float64              `json:"EndHour"`
	ID        int32                `json:"Id"`
	StartHour float64              `json:"StartHour"`
	UserID    string               `json:"UserId"`
}
