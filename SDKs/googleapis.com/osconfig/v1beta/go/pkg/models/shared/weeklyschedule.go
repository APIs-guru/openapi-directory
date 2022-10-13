package shared

type WeeklyScheduleDayOfWeekEnum string

const (
	WeeklyScheduleDayOfWeekEnumDayOfWeekUnspecified WeeklyScheduleDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	WeeklyScheduleDayOfWeekEnumMonday               WeeklyScheduleDayOfWeekEnum = "MONDAY"
	WeeklyScheduleDayOfWeekEnumTuesday              WeeklyScheduleDayOfWeekEnum = "TUESDAY"
	WeeklyScheduleDayOfWeekEnumWednesday            WeeklyScheduleDayOfWeekEnum = "WEDNESDAY"
	WeeklyScheduleDayOfWeekEnumThursday             WeeklyScheduleDayOfWeekEnum = "THURSDAY"
	WeeklyScheduleDayOfWeekEnumFriday               WeeklyScheduleDayOfWeekEnum = "FRIDAY"
	WeeklyScheduleDayOfWeekEnumSaturday             WeeklyScheduleDayOfWeekEnum = "SATURDAY"
	WeeklyScheduleDayOfWeekEnumSunday               WeeklyScheduleDayOfWeekEnum = "SUNDAY"
)

type WeeklySchedule struct {
	DayOfWeek *WeeklyScheduleDayOfWeekEnum `json:"dayOfWeek"`
}
