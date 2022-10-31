package shared



type ErrorEvent struct {
    Context *ErrorContext `json:"context,omitempty"`
    EventTime *string `json:"eventTime,omitempty"`
    Message *string `json:"message,omitempty"`
    ServiceContext *ServiceContext `json:"serviceContext,omitempty"`
    
}

