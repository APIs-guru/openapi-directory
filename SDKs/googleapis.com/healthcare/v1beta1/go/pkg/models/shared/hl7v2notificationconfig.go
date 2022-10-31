package shared



type Hl7V2NotificationConfig struct {
    Filter *string `json:"filter,omitempty"`
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    
}

