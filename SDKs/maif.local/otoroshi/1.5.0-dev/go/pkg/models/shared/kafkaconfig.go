package shared

// KafkaConfig
// The configuration for kafka access
type KafkaConfig struct {
	KeyPass  *string  `json:"keyPass,omitempty"`
	KeyStore *string  `json:"keyStore,omitempty"`
	Servers  []string `json:"servers"`
	Topic    *string  `json:"topic,omitempty"`
	Trustore *string  `json:"trustore,omitempty"`
}
