package shared



type Indicator struct {
    Domains []string `json:"domains,omitempty"`
    IPAddresses []string `json:"ipAddresses,omitempty"`
    Signatures []ProcessSignature `json:"signatures,omitempty"`
    Uris []string `json:"uris,omitempty"`
    
}

