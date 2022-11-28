package shared

// MonthlySchedule
// Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month".
type MonthlySchedule struct {
	MonthDay       *int32          `json:"monthDay,omitempty"`
	WeekDayOfMonth *WeekDayOfMonth `json:"weekDayOfMonth,omitempty"`
}
