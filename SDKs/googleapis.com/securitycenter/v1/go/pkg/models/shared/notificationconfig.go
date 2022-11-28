package shared

// NotificationConfigInput
// Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
type NotificationConfigInput struct {
	Description     *string          `json:"description,omitempty"`
	Name            *string          `json:"name,omitempty"`
	PubsubTopic     *string          `json:"pubsubTopic,omitempty"`
	StreamingConfig *StreamingConfig `json:"streamingConfig,omitempty"`
}

// NotificationConfig
// Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.
type NotificationConfig struct {
	Description     *string          `json:"description,omitempty"`
	Name            *string          `json:"name,omitempty"`
	PubsubTopic     *string          `json:"pubsubTopic,omitempty"`
	ServiceAccount  *string          `json:"serviceAccount,omitempty"`
	StreamingConfig *StreamingConfig `json:"streamingConfig,omitempty"`
}
