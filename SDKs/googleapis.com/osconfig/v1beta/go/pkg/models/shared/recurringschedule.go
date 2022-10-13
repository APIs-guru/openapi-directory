package shared

type RecurringScheduleFrequencyEnum string

const (
	RecurringScheduleFrequencyEnumFrequencyUnspecified RecurringScheduleFrequencyEnum = "FREQUENCY_UNSPECIFIED"
	RecurringScheduleFrequencyEnumWeekly               RecurringScheduleFrequencyEnum = "WEEKLY"
	RecurringScheduleFrequencyEnumMonthly              RecurringScheduleFrequencyEnum = "MONTHLY"
	RecurringScheduleFrequencyEnumDaily                RecurringScheduleFrequencyEnum = "DAILY"
)

type RecurringSchedule struct {
	EndTime         *string                         `json:"endTime"`
	Frequency       *RecurringScheduleFrequencyEnum `json:"frequency"`
	LastExecuteTime *string                         `json:"lastExecuteTime"`
	Monthly         *MonthlySchedule                `json:"monthly"`
	NextExecuteTime *string                         `json:"nextExecuteTime"`
	StartTime       *string                         `json:"startTime"`
	TimeOfDay       *TimeOfDay                      `json:"timeOfDay"`
	TimeZone        *TimeZone                       `json:"timeZone"`
	Weekly          *WeeklySchedule                 `json:"weekly"`
}
