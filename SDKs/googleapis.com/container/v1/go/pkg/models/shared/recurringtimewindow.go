package shared

type RecurringTimeWindow struct {
	Recurrence *string     `json:"recurrence"`
	Window     *TimeWindow `json:"window"`
}
