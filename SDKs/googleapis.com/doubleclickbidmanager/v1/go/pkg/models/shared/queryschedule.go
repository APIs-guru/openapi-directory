package shared

type QueryScheduleFrequencyEnum string

const (
	QueryScheduleFrequencyEnumOneTime     QueryScheduleFrequencyEnum = "ONE_TIME"
	QueryScheduleFrequencyEnumDaily       QueryScheduleFrequencyEnum = "DAILY"
	QueryScheduleFrequencyEnumWeekly      QueryScheduleFrequencyEnum = "WEEKLY"
	QueryScheduleFrequencyEnumSemiMonthly QueryScheduleFrequencyEnum = "SEMI_MONTHLY"
	QueryScheduleFrequencyEnumMonthly     QueryScheduleFrequencyEnum = "MONTHLY"
	QueryScheduleFrequencyEnumQuarterly   QueryScheduleFrequencyEnum = "QUARTERLY"
	QueryScheduleFrequencyEnumYearly      QueryScheduleFrequencyEnum = "YEARLY"
)

type QuerySchedule struct {
	EndTimeMs           *string                     `json:"endTimeMs"`
	Frequency           *QueryScheduleFrequencyEnum `json:"frequency"`
	NextRunMinuteOfDay  *int32                      `json:"nextRunMinuteOfDay"`
	NextRunTimezoneCode *string                     `json:"nextRunTimezoneCode"`
	StartTimeMs         *string                     `json:"startTimeMs"`
}
