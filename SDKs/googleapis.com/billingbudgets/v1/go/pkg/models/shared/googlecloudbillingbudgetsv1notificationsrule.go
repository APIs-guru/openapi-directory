package shared



type GoogleCloudBillingBudgetsV1NotificationsRule struct {
    DisableDefaultIamRecipients *bool `json:"disableDefaultIamRecipients,omitempty"`
    MonitoringNotificationChannels []string `json:"monitoringNotificationChannels,omitempty"`
    PubsubTopic *string `json:"pubsubTopic,omitempty"`
    SchemaVersion *string `json:"schemaVersion,omitempty"`
    
}

