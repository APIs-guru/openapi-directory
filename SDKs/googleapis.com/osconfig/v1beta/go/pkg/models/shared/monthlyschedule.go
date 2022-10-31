package shared

type MonthlySchedule struct {
	MonthDay       *int32          `json:"monthDay,omitempty"`
	WeekDayOfMonth *WeekDayOfMonth `json:"weekDayOfMonth,omitempty"`
}
