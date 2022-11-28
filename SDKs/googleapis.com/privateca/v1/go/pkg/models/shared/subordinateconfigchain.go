package shared

// SubordinateConfigChain
// This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
type SubordinateConfigChain struct {
	PemCertificates []string `json:"pemCertificates,omitempty"`
}
