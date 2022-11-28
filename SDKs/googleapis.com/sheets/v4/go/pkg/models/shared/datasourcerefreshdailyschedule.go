package shared

// DataSourceRefreshDailySchedule
// A schedule for data to refresh every day in a given time interval.
type DataSourceRefreshDailySchedule struct {
	StartTime *TimeOfDay `json:"startTime,omitempty"`
}
