package shared



type CertificateChains struct {
    CaviumCerts []string `json:"caviumCerts,omitempty"`
    GoogleCardCerts []string `json:"googleCardCerts,omitempty"`
    GooglePartitionCerts []string `json:"googlePartitionCerts,omitempty"`
    
}

