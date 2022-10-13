package shared

type EventPeriodUpdate struct {
	Kind       *string              `json:"kind"`
	TimePeriod *EventPeriodRange    `json:"timePeriod"`
	Updates    []EventUpdateRequest `json:"updates"`
}
