package shared

// SQLScheduledMaintenance
// Any scheduled maintenance for this instance.
type SQLScheduledMaintenance struct {
	CanDefer             *bool   `json:"canDefer,omitempty"`
	CanReschedule        *bool   `json:"canReschedule,omitempty"`
	ScheduleDeadlineTime *string `json:"scheduleDeadlineTime,omitempty"`
	StartTime            *string `json:"startTime,omitempty"`
}
