package shared

type MonthlySchedule struct {
	MonthDay       *int32          `json:"monthDay"`
	WeekDayOfMonth *WeekDayOfMonth `json:"weekDayOfMonth"`
}
