package shared



type NotificationConfig struct {
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    StreamingConfig *StreamingConfig `json:"streamingConfig,omitempty"`
    
}

