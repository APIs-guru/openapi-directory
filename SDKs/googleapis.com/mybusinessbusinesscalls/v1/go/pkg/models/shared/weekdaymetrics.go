package shared

type WeekDayMetricsDayEnum string

const (
	WeekDayMetricsDayEnumDayOfWeekUnspecified WeekDayMetricsDayEnum = "DAY_OF_WEEK_UNSPECIFIED"
	WeekDayMetricsDayEnumMonday               WeekDayMetricsDayEnum = "MONDAY"
	WeekDayMetricsDayEnumTuesday              WeekDayMetricsDayEnum = "TUESDAY"
	WeekDayMetricsDayEnumWednesday            WeekDayMetricsDayEnum = "WEDNESDAY"
	WeekDayMetricsDayEnumThursday             WeekDayMetricsDayEnum = "THURSDAY"
	WeekDayMetricsDayEnumFriday               WeekDayMetricsDayEnum = "FRIDAY"
	WeekDayMetricsDayEnumSaturday             WeekDayMetricsDayEnum = "SATURDAY"
	WeekDayMetricsDayEnumSunday               WeekDayMetricsDayEnum = "SUNDAY"
)

type WeekDayMetrics struct {
	Day              *WeekDayMetricsDayEnum `json:"day"`
	MissedCallsCount *int32                 `json:"missedCallsCount"`
}
