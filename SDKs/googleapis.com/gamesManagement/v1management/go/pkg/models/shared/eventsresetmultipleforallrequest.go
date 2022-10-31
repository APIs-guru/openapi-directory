package shared



type EventsResetMultipleForAllRequest struct {
    EventIds []string `json:"event_ids,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

