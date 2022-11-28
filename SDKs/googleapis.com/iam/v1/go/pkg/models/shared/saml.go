package shared

// Saml
// Represents an SAML 2.0 identity provider.
type Saml struct {
	IdpMetadataXML *string `json:"idpMetadataXml,omitempty"`
}
