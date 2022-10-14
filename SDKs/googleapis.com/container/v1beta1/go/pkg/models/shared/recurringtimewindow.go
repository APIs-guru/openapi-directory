package shared

type RecurringTimeWindow struct {
	Recurrence *string     `json:"recurrence,omitempty"`
	Window     *TimeWindow `json:"window,omitempty"`
}
