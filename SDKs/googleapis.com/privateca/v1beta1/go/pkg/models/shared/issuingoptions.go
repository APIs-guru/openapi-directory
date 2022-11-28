package shared

// IssuingOptions
// Options that affect all certificates issued by a CertificateAuthority.
type IssuingOptions struct {
	IncludeCaCertURL    *bool `json:"includeCaCertUrl,omitempty"`
	IncludeCrlAccessURL *bool `json:"includeCrlAccessUrl,omitempty"`
}
