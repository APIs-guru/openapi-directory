package shared

type KafkaConfig struct {
	KeyPass  *string  `json:"keyPass"`
	KeyStore *string  `json:"keyStore"`
	Servers  []string `json:"servers"`
	Topic    *string  `json:"topic"`
	Trustore *string  `json:"trustore"`
}
