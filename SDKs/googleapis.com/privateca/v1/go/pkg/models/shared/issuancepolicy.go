package shared

type IssuancePolicy struct {
	AllowedIssuanceModes  *IssuanceModes                   `json:"allowedIssuanceModes"`
	AllowedKeyTypes       []AllowedKeyType                 `json:"allowedKeyTypes"`
	BaselineValues        *X509Parameters                  `json:"baselineValues"`
	IdentityConstraints   *CertificateIdentityConstraints  `json:"identityConstraints"`
	MaximumLifetime       *string                          `json:"maximumLifetime"`
	PassthroughExtensions *CertificateExtensionConstraints `json:"passthroughExtensions"`
}
