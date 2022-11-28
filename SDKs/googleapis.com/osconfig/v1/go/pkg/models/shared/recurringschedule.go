package shared

type RecurringScheduleFrequencyEnum string

const (
	RecurringScheduleFrequencyEnumFrequencyUnspecified RecurringScheduleFrequencyEnum = "FREQUENCY_UNSPECIFIED"
	RecurringScheduleFrequencyEnumWeekly               RecurringScheduleFrequencyEnum = "WEEKLY"
	RecurringScheduleFrequencyEnumMonthly              RecurringScheduleFrequencyEnum = "MONTHLY"
	RecurringScheduleFrequencyEnumDaily                RecurringScheduleFrequencyEnum = "DAILY"
)

// RecurringScheduleInput
// Sets the time for recurring patch deployments.
type RecurringScheduleInput struct {
	EndTime   *string                         `json:"endTime,omitempty"`
	Frequency *RecurringScheduleFrequencyEnum `json:"frequency,omitempty"`
	Monthly   *MonthlySchedule                `json:"monthly,omitempty"`
	StartTime *string                         `json:"startTime,omitempty"`
	TimeOfDay *TimeOfDay                      `json:"timeOfDay,omitempty"`
	TimeZone  *TimeZone                       `json:"timeZone,omitempty"`
	Weekly    *WeeklySchedule                 `json:"weekly,omitempty"`
}

// RecurringSchedule
// Sets the time for recurring patch deployments.
type RecurringSchedule struct {
	EndTime         *string                         `json:"endTime,omitempty"`
	Frequency       *RecurringScheduleFrequencyEnum `json:"frequency,omitempty"`
	LastExecuteTime *string                         `json:"lastExecuteTime,omitempty"`
	Monthly         *MonthlySchedule                `json:"monthly,omitempty"`
	NextExecuteTime *string                         `json:"nextExecuteTime,omitempty"`
	StartTime       *string                         `json:"startTime,omitempty"`
	TimeOfDay       *TimeOfDay                      `json:"timeOfDay,omitempty"`
	TimeZone        *TimeZone                       `json:"timeZone,omitempty"`
	Weekly          *WeeklySchedule                 `json:"weekly,omitempty"`
}
