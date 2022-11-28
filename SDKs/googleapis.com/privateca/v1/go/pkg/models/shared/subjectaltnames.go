package shared

// SubjectAltNames
// SubjectAltNames corresponds to a more modern way of listing what the asserted identity is in a certificate (i.e., compared to the "common name" in the distinguished name).
type SubjectAltNames struct {
	CustomSans     []X509Extension `json:"customSans,omitempty"`
	DNSNames       []string        `json:"dnsNames,omitempty"`
	EmailAddresses []string        `json:"emailAddresses,omitempty"`
	IPAddresses    []string        `json:"ipAddresses,omitempty"`
	Uris           []string        `json:"uris,omitempty"`
}
