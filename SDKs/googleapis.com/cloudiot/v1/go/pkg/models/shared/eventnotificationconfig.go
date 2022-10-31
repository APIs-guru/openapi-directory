package shared



type EventNotificationConfig struct {
    PubsubTopicName *string `json:"pubsubTopicName,omitempty"`
    SubfolderMatches *string `json:"subfolderMatches,omitempty"`
    
}

