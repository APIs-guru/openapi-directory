package shared



type NotificationConfig struct {
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    SendForBulkImport *bool `json:"sendForBulkImport,omitempty"`
    
}

