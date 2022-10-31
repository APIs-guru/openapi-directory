package shared

type TimeDimensionDayOfWeekEnum string

const (
	TimeDimensionDayOfWeekEnumDayOfWeekUnspecified TimeDimensionDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	TimeDimensionDayOfWeekEnumMonday               TimeDimensionDayOfWeekEnum = "MONDAY"
	TimeDimensionDayOfWeekEnumTuesday              TimeDimensionDayOfWeekEnum = "TUESDAY"
	TimeDimensionDayOfWeekEnumWednesday            TimeDimensionDayOfWeekEnum = "WEDNESDAY"
	TimeDimensionDayOfWeekEnumThursday             TimeDimensionDayOfWeekEnum = "THURSDAY"
	TimeDimensionDayOfWeekEnumFriday               TimeDimensionDayOfWeekEnum = "FRIDAY"
	TimeDimensionDayOfWeekEnumSaturday             TimeDimensionDayOfWeekEnum = "SATURDAY"
	TimeDimensionDayOfWeekEnumSunday               TimeDimensionDayOfWeekEnum = "SUNDAY"
)

type TimeDimension struct {
	DayOfWeek *TimeDimensionDayOfWeekEnum `json:"dayOfWeek,omitempty"`
	TimeOfDay *TimeOfDay                  `json:"timeOfDay,omitempty"`
	TimeRange *TimeRange                  `json:"timeRange,omitempty"`
}
