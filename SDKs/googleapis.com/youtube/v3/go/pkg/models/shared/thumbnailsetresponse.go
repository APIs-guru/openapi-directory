package shared



type ThumbnailSetResponse struct {
    Etag *string `json:"etag,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Items []ThumbnailDetails `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

