package shared

type SamlSpConfig struct {
	AssertionConsumerServiceURI *string `json:"assertionConsumerServiceUri,omitempty"`
	EntityID                    *string `json:"entityId,omitempty"`
}
