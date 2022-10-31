package shared



type ChannelSectionListResponse struct {
    Etag *string `json:"etag,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Items []ChannelSection `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

