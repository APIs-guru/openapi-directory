package shared

// RecurringTimeWindow
// Represents an arbitrary window of time that recurs.
type RecurringTimeWindow struct {
	Recurrence *string     `json:"recurrence,omitempty"`
	Window     *TimeWindow `json:"window,omitempty"`
}
