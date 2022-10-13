package shared

type SamlSpConfig struct {
	AssertionConsumerServiceURI *string `json:"assertionConsumerServiceUri"`
	EntityID                    *string `json:"entityId"`
}
