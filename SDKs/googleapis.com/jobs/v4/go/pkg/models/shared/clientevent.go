package shared



type ClientEvent struct {
    CreateTime *string `json:"createTime,omitempty"`
    EventID *string `json:"eventId,omitempty"`
    EventNotes *string `json:"eventNotes,omitempty"`
    JobEvent *JobEvent `json:"jobEvent,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

