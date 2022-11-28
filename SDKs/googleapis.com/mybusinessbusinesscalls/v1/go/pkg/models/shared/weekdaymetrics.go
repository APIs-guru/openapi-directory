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

// WeekDayMetrics
// Metrics for a week day.
type WeekDayMetrics struct {
	Day              *WeekDayMetricsDayEnum `json:"day,omitempty"`
	MissedCallsCount *int32                 `json:"missedCallsCount,omitempty"`
}
