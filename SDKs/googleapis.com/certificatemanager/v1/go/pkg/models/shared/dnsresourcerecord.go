package shared

// DNSResourceRecord
// The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.
type DNSResourceRecord struct {
	Data *string `json:"data,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}
