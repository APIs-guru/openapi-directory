package shared

// GoogleCloudBillingBudgetsV1NotificationsRule
// NotificationsRule defines notifications that are sent based on budget spend and thresholds.
type GoogleCloudBillingBudgetsV1NotificationsRule struct {
	DisableDefaultIamRecipients    *bool    `json:"disableDefaultIamRecipients,omitempty"`
	MonitoringNotificationChannels []string `json:"monitoringNotificationChannels,omitempty"`
	PubsubTopic                    *string  `json:"pubsubTopic,omitempty"`
	SchemaVersion                  *string  `json:"schemaVersion,omitempty"`
}
