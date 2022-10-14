package shared

type DataSourceRefreshScheduleRefreshScopeEnum string

const (
	DataSourceRefreshScheduleRefreshScopeEnumDataSourceRefreshScopeUnspecified DataSourceRefreshScheduleRefreshScopeEnum = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
	DataSourceRefreshScheduleRefreshScopeEnumAllDataSources                    DataSourceRefreshScheduleRefreshScopeEnum = "ALL_DATA_SOURCES"
)

type DataSourceRefreshSchedule struct {
	DailySchedule   *DataSourceRefreshDailySchedule            `json:"dailySchedule,omitempty"`
	Enabled         *bool                                      `json:"enabled,omitempty"`
	MonthlySchedule *DataSourceRefreshMonthlySchedule          `json:"monthlySchedule,omitempty"`
	NextRun         *Interval                                  `json:"nextRun,omitempty"`
	RefreshScope    *DataSourceRefreshScheduleRefreshScopeEnum `json:"refreshScope,omitempty"`
	WeeklySchedule  *DataSourceRefreshWeeklySchedule           `json:"weeklySchedule,omitempty"`
}
