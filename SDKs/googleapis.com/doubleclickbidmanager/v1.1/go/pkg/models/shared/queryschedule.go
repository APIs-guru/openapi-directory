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

// QuerySchedule
// Information on how frequently and when to run a query.
type QuerySchedule struct {
	EndTimeMs           *string                     `json:"endTimeMs,omitempty"`
	Frequency           *QueryScheduleFrequencyEnum `json:"frequency,omitempty"`
	NextRunMinuteOfDay  *int32                      `json:"nextRunMinuteOfDay,omitempty"`
	NextRunTimezoneCode *string                     `json:"nextRunTimezoneCode,omitempty"`
	StartTimeMs         *string                     `json:"startTimeMs,omitempty"`
}
