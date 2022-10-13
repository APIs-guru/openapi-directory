package shared

type SubjectAltNames struct {
	CustomSans     []X509Extension `json:"customSans"`
	DNSNames       []string        `json:"dnsNames"`
	EmailAddresses []string        `json:"emailAddresses"`
	IPAddresses    []string        `json:"ipAddresses"`
	Uris           []string        `json:"uris"`
}
