package shared



type CreateConferenceRequest struct {
    ConferenceSolutionKey *ConferenceSolutionKey `json:"conferenceSolutionKey,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    Status *ConferenceRequestStatus `json:"status,omitempty"`
    
}

