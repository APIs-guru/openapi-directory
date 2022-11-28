package shared

// DataSourceRefreshMonthlySchedule
// A monthly schedule for data to refresh on specific days in the month in a given time interval.
type DataSourceRefreshMonthlySchedule struct {
	DaysOfMonth []int32    `json:"daysOfMonth,omitempty"`
	StartTime   *TimeOfDay `json:"startTime,omitempty"`
}
