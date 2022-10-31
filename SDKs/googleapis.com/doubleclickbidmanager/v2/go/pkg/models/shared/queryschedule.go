package shared




type QueryScheduleFrequencyEnum string

const (
    QueryScheduleFrequencyEnumFrequencyUnspecified QueryScheduleFrequencyEnum = "FREQUENCY_UNSPECIFIED"
QueryScheduleFrequencyEnumOneTime QueryScheduleFrequencyEnum = "ONE_TIME"
QueryScheduleFrequencyEnumDaily QueryScheduleFrequencyEnum = "DAILY"
QueryScheduleFrequencyEnumWeekly QueryScheduleFrequencyEnum = "WEEKLY"
QueryScheduleFrequencyEnumSemiMonthly QueryScheduleFrequencyEnum = "SEMI_MONTHLY"
QueryScheduleFrequencyEnumMonthly QueryScheduleFrequencyEnum = "MONTHLY"
QueryScheduleFrequencyEnumQuarterly QueryScheduleFrequencyEnum = "QUARTERLY"
QueryScheduleFrequencyEnumYearly QueryScheduleFrequencyEnum = "YEARLY"
)


type QuerySchedule struct {
    EndDate *Date `json:"endDate,omitempty"`
    Frequency *QueryScheduleFrequencyEnum `json:"frequency,omitempty"`
    NextRunTimezoneCode *string `json:"nextRunTimezoneCode,omitempty"`
    StartDate *Date `json:"startDate,omitempty"`
    
}

