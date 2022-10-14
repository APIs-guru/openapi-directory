package shared

type DayPartTargetingDaysOfWeekEnum string

const (
	DayPartTargetingDaysOfWeekEnumMonday    DayPartTargetingDaysOfWeekEnum = "MONDAY"
	DayPartTargetingDaysOfWeekEnumTuesday   DayPartTargetingDaysOfWeekEnum = "TUESDAY"
	DayPartTargetingDaysOfWeekEnumWednesday DayPartTargetingDaysOfWeekEnum = "WEDNESDAY"
	DayPartTargetingDaysOfWeekEnumThursday  DayPartTargetingDaysOfWeekEnum = "THURSDAY"
	DayPartTargetingDaysOfWeekEnumFriday    DayPartTargetingDaysOfWeekEnum = "FRIDAY"
	DayPartTargetingDaysOfWeekEnumSaturday  DayPartTargetingDaysOfWeekEnum = "SATURDAY"
	DayPartTargetingDaysOfWeekEnumSunday    DayPartTargetingDaysOfWeekEnum = "SUNDAY"
)

type DayPartTargeting struct {
	DaysOfWeek    []DayPartTargetingDaysOfWeekEnum `json:"daysOfWeek,omitempty"`
	HoursOfDay    []int32                          `json:"hoursOfDay,omitempty"`
	UserLocalTime *bool                            `json:"userLocalTime,omitempty"`
}
