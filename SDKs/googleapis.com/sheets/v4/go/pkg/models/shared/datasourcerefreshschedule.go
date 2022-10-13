package shared

type DataSourceRefreshScheduleRefreshScopeEnum string

const (
	DataSourceRefreshScheduleRefreshScopeEnumDataSourceRefreshScopeUnspecified DataSourceRefreshScheduleRefreshScopeEnum = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
	DataSourceRefreshScheduleRefreshScopeEnumAllDataSources                    DataSourceRefreshScheduleRefreshScopeEnum = "ALL_DATA_SOURCES"
)

type DataSourceRefreshSchedule struct {
	DailySchedule   *DataSourceRefreshDailySchedule            `json:"dailySchedule"`
	Enabled         *bool                                      `json:"enabled"`
	MonthlySchedule *DataSourceRefreshMonthlySchedule          `json:"monthlySchedule"`
	NextRun         *Interval                                  `json:"nextRun"`
	RefreshScope    *DataSourceRefreshScheduleRefreshScopeEnum `json:"refreshScope"`
	WeeklySchedule  *DataSourceRefreshWeeklySchedule           `json:"weeklySchedule"`
}
