package shared



type SubjectAltNames struct {
    CustomSans []X509Extension `json:"customSans,omitempty"`
    DNSNames []string `json:"dnsNames,omitempty"`
    EmailAddresses []string `json:"emailAddresses,omitempty"`
    IPAddresses []string `json:"ipAddresses,omitempty"`
    Uris []string `json:"uris,omitempty"`
    
}

