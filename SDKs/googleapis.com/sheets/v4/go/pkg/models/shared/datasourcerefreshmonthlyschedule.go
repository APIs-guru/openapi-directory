package shared

type DataSourceRefreshMonthlySchedule struct {
	DaysOfMonth []int32    `json:"daysOfMonth"`
	StartTime   *TimeOfDay `json:"startTime"`
}
