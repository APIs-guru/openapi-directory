package shared



type CustomEventsBatchInsertResponse struct {
    HasFailures *bool `json:"hasFailures,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Status []CustomEventStatus `json:"status,omitempty"`
    
}

