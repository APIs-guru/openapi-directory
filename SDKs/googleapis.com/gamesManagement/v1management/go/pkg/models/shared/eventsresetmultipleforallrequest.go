package shared

type EventsResetMultipleForAllRequest struct {
	EventIds []string `json:"event_ids"`
	Kind     *string  `json:"kind"`
}
