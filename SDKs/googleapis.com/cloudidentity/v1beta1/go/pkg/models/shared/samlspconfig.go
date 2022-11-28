package shared

// SamlSpConfig
// SAML SP (service provider) configuration.
type SamlSpConfig struct {
	AssertionConsumerServiceURI *string `json:"assertionConsumerServiceUri,omitempty"`
	EntityID                    *string `json:"entityId,omitempty"`
}
