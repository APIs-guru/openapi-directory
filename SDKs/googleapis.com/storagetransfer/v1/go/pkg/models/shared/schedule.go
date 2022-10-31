package shared

type Schedule struct {
	EndTimeOfDay      *TimeOfDay `json:"endTimeOfDay,omitempty"`
	RepeatInterval    *string    `json:"repeatInterval,omitempty"`
	ScheduleEndDate   *Date      `json:"scheduleEndDate,omitempty"`
	ScheduleStartDate *Date      `json:"scheduleStartDate,omitempty"`
	StartTimeOfDay    *TimeOfDay `json:"startTimeOfDay,omitempty"`
}
