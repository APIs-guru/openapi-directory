package shared



type CaptionListResponse struct {
    Etag *string `json:"etag,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Items []Caption `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

