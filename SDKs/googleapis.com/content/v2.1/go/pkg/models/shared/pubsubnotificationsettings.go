package shared



type PubsubNotificationSettings struct {
    CloudTopicName *string `json:"cloudTopicName,omitempty"`
    Kind *string `json:"kind,omitempty"`
    RegisteredEvents []string `json:"registeredEvents,omitempty"`
    
}

