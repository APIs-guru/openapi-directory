package shared




type WeekDayOfMonthDayOfWeekEnum string

const (
    WeekDayOfMonthDayOfWeekEnumDayOfWeekUnspecified WeekDayOfMonthDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
WeekDayOfMonthDayOfWeekEnumMonday WeekDayOfMonthDayOfWeekEnum = "MONDAY"
WeekDayOfMonthDayOfWeekEnumTuesday WeekDayOfMonthDayOfWeekEnum = "TUESDAY"
WeekDayOfMonthDayOfWeekEnumWednesday WeekDayOfMonthDayOfWeekEnum = "WEDNESDAY"
WeekDayOfMonthDayOfWeekEnumThursday WeekDayOfMonthDayOfWeekEnum = "THURSDAY"
WeekDayOfMonthDayOfWeekEnumFriday WeekDayOfMonthDayOfWeekEnum = "FRIDAY"
WeekDayOfMonthDayOfWeekEnumSaturday WeekDayOfMonthDayOfWeekEnum = "SATURDAY"
WeekDayOfMonthDayOfWeekEnumSunday WeekDayOfMonthDayOfWeekEnum = "SUNDAY"
)


type WeekDayOfMonth struct {
    DayOfWeek *WeekDayOfMonthDayOfWeekEnum `json:"dayOfWeek,omitempty"`
    DayOffset *int32 `json:"dayOffset,omitempty"`
    WeekOrdinal *int32 `json:"weekOrdinal,omitempty"`
    
}

