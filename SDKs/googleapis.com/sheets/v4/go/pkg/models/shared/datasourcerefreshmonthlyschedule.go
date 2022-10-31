package shared



type DataSourceRefreshMonthlySchedule struct {
    DaysOfMonth []int32 `json:"daysOfMonth,omitempty"`
    StartTime *TimeOfDay `json:"startTime,omitempty"`
    
}

