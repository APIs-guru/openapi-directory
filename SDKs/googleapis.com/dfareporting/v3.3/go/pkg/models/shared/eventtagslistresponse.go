package shared



type EventTagsListResponse struct {
    EventTags []EventTag `json:"eventTags,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

