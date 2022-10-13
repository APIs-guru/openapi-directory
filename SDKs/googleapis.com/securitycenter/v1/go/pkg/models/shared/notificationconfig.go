package shared

type NotificationConfig struct {
	Description     *string          `json:"description"`
	Name            *string          `json:"name"`
	PubsubTopic     *string          `json:"pubsubTopic"`
	ServiceAccount  *string          `json:"serviceAccount"`
	StreamingConfig *StreamingConfig `json:"streamingConfig"`
}
