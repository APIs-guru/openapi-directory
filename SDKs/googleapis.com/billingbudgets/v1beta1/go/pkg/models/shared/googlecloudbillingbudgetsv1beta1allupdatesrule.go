package shared

type GoogleCloudBillingBudgetsV1beta1AllUpdatesRule struct {
	DisableDefaultIamRecipients    *bool    `json:"disableDefaultIamRecipients"`
	MonitoringNotificationChannels []string `json:"monitoringNotificationChannels"`
	PubsubTopic                    *string  `json:"pubsubTopic"`
	SchemaVersion                  *string  `json:"schemaVersion"`
}
