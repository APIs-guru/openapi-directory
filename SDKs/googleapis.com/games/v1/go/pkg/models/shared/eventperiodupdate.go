package shared

// EventPeriodUpdate
// An event period update resource.
type EventPeriodUpdate struct {
	Kind       *string              `json:"kind,omitempty"`
	TimePeriod *EventPeriodRange    `json:"timePeriod,omitempty"`
	Updates    []EventUpdateRequest `json:"updates,omitempty"`
}
