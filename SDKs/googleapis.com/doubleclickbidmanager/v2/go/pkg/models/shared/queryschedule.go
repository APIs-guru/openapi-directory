package shared

type QueryScheduleFrequencyEnum string

const (
	QueryScheduleFrequencyEnumFrequencyUnspecified QueryScheduleFrequencyEnum = "FREQUENCY_UNSPECIFIED"
	QueryScheduleFrequencyEnumOneTime              QueryScheduleFrequencyEnum = "ONE_TIME"
	QueryScheduleFrequencyEnumDaily                QueryScheduleFrequencyEnum = "DAILY"
	QueryScheduleFrequencyEnumWeekly               QueryScheduleFrequencyEnum = "WEEKLY"
	QueryScheduleFrequencyEnumSemiMonthly          QueryScheduleFrequencyEnum = "SEMI_MONTHLY"
	QueryScheduleFrequencyEnumMonthly              QueryScheduleFrequencyEnum = "MONTHLY"
	QueryScheduleFrequencyEnumQuarterly            QueryScheduleFrequencyEnum = "QUARTERLY"
	QueryScheduleFrequencyEnumYearly               QueryScheduleFrequencyEnum = "YEARLY"
)

type QuerySchedule struct {
	EndDate             *Date                       `json:"endDate"`
	Frequency           *QueryScheduleFrequencyEnum `json:"frequency"`
	NextRunTimezoneCode *string                     `json:"nextRunTimezoneCode"`
	StartDate           *Date                       `json:"startDate"`
}
