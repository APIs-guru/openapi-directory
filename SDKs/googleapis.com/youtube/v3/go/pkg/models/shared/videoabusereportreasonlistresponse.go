package shared



type VideoAbuseReportReasonListResponse struct {
    Etag *string `json:"etag,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    Items []VideoAbuseReportReason `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    VisitorID *string `json:"visitorId,omitempty"`
    
}

