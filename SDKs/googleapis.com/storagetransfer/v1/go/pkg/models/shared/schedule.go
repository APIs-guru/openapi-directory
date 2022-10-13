package shared

type Schedule struct {
	EndTimeOfDay      *TimeOfDay `json:"endTimeOfDay"`
	RepeatInterval    *string    `json:"repeatInterval"`
	ScheduleEndDate   *Date      `json:"scheduleEndDate"`
	ScheduleStartDate *Date      `json:"scheduleStartDate"`
	StartTimeOfDay    *TimeOfDay `json:"startTimeOfDay"`
}
