package shared



type EventPeriodUpdate struct {
    Kind *string `json:"kind,omitempty"`
    TimePeriod *EventPeriodRange `json:"timePeriod,omitempty"`
    Updates []EventUpdateRequest `json:"updates,omitempty"`
    
}

