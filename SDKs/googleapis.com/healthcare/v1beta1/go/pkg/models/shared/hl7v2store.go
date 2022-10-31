package shared



type Hl7V2Store struct {
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    NotificationConfig *NotificationConfig `json:"notificationConfig,omitempty"`
    NotificationConfigs []Hl7V2NotificationConfig `json:"notificationConfigs,omitempty"`
    ParserConfig *ParserConfig `json:"parserConfig,omitempty"`
    RejectDuplicateMessage *bool `json:"rejectDuplicateMessage,omitempty"`
    
}

