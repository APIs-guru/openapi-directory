package shared

type NotificationConfig struct {
	PubsubTopic       *string `json:"pubsubTopic"`
	SendForBulkImport *bool   `json:"sendForBulkImport"`
}
