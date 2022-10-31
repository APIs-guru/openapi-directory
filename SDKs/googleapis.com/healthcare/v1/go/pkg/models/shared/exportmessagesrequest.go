package shared



type ExportMessagesRequest struct {
    EndTime *string `json:"endTime,omitempty"`
    GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    
}

