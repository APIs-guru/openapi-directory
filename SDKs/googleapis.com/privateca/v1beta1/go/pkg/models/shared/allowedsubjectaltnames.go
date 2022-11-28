package shared

// AllowedSubjectAltNames
// AllowedSubjectAltNames specifies the allowed values for SubjectAltNames by the CertificateAuthority when issuing Certificates.
type AllowedSubjectAltNames struct {
	AllowCustomSans           *bool    `json:"allowCustomSans,omitempty"`
	AllowGlobbingDNSWildcards *bool    `json:"allowGlobbingDnsWildcards,omitempty"`
	AllowedDNSNames           []string `json:"allowedDnsNames,omitempty"`
	AllowedEmailAddresses     []string `json:"allowedEmailAddresses,omitempty"`
	AllowedIps                []string `json:"allowedIps,omitempty"`
	AllowedUris               []string `json:"allowedUris,omitempty"`
}
