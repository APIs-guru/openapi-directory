package shared

type GoogleCloudBillingBudgetsV1NotificationsRule struct {
	DisableDefaultIamRecipients    *bool    `json:"disableDefaultIamRecipients"`
	MonitoringNotificationChannels []string `json:"monitoringNotificationChannels"`
	PubsubTopic                    *string  `json:"pubsubTopic"`
	SchemaVersion                  *string  `json:"schemaVersion"`
}
