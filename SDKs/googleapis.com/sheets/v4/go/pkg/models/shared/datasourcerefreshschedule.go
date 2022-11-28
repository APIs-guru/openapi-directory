package shared

type DataSourceRefreshScheduleRefreshScopeEnum string

const (
	DataSourceRefreshScheduleRefreshScopeEnumDataSourceRefreshScopeUnspecified DataSourceRefreshScheduleRefreshScopeEnum = "DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED"
	DataSourceRefreshScheduleRefreshScopeEnumAllDataSources                    DataSourceRefreshScheduleRefreshScopeEnum = "ALL_DATA_SOURCES"
)

// DataSourceRefreshSchedule
// Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8am , the refresh will take place between 8am and 12pm every day.
type DataSourceRefreshSchedule struct {
	DailySchedule   *DataSourceRefreshDailySchedule            `json:"dailySchedule,omitempty"`
	Enabled         *bool                                      `json:"enabled,omitempty"`
	MonthlySchedule *DataSourceRefreshMonthlySchedule          `json:"monthlySchedule,omitempty"`
	NextRun         *Interval                                  `json:"nextRun,omitempty"`
	RefreshScope    *DataSourceRefreshScheduleRefreshScopeEnum `json:"refreshScope,omitempty"`
	WeeklySchedule  *DataSourceRefreshWeeklySchedule           `json:"weeklySchedule,omitempty"`
}
