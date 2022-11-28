package shared

type DataSourceRefreshWeeklyScheduleDaysOfWeekEnum string

const (
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumDayOfWeekUnspecified DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumMonday               DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "MONDAY"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumTuesday              DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "TUESDAY"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumWednesday            DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "WEDNESDAY"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumThursday             DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "THURSDAY"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumFriday               DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "FRIDAY"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumSaturday             DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "SATURDAY"
	DataSourceRefreshWeeklyScheduleDaysOfWeekEnumSunday               DataSourceRefreshWeeklyScheduleDaysOfWeekEnum = "SUNDAY"
)

// DataSourceRefreshWeeklySchedule
// A weekly schedule for data to refresh on specific days in a given time interval.
type DataSourceRefreshWeeklySchedule struct {
	DaysOfWeek []DataSourceRefreshWeeklyScheduleDaysOfWeekEnum `json:"daysOfWeek,omitempty"`
	StartTime  *TimeOfDay                                      `json:"startTime,omitempty"`
}
