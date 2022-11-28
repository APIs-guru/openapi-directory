package shared

// Schedule
// Transfers can be scheduled to recur or to run just once.
type Schedule struct {
	EndTimeOfDay      *TimeOfDay `json:"endTimeOfDay,omitempty"`
	RepeatInterval    *string    `json:"repeatInterval,omitempty"`
	ScheduleEndDate   *Date      `json:"scheduleEndDate,omitempty"`
	ScheduleStartDate *Date      `json:"scheduleStartDate,omitempty"`
	StartTimeOfDay    *TimeOfDay `json:"startTimeOfDay,omitempty"`
}
