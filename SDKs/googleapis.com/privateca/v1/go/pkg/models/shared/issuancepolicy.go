package shared

// IssuancePolicy
// Defines controls over all certificate issuance within a CaPool.
type IssuancePolicy struct {
	AllowedIssuanceModes  *IssuanceModes                   `json:"allowedIssuanceModes,omitempty"`
	AllowedKeyTypes       []AllowedKeyType                 `json:"allowedKeyTypes,omitempty"`
	BaselineValues        *X509Parameters                  `json:"baselineValues,omitempty"`
	IdentityConstraints   *CertificateIdentityConstraints  `json:"identityConstraints,omitempty"`
	MaximumLifetime       *string                          `json:"maximumLifetime,omitempty"`
	PassthroughExtensions *CertificateExtensionConstraints `json:"passthroughExtensions,omitempty"`
}
