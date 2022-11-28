package shared

// ElasticConfig
// The configuration for elastic access
type ElasticConfig struct {
	ClusterURI string            `json:"clusterUri"`
	Headers    map[string]string `json:"headers"`
	Index      string            `json:"index"`
	Password   string            `json:"password"`
	Type       string            `json:"type"`
	User       string            `json:"user"`
}
