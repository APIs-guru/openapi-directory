package shared

type CertificateChains struct {
	CaviumCerts          []string `json:"caviumCerts"`
	GoogleCardCerts      []string `json:"googleCardCerts"`
	GooglePartitionCerts []string `json:"googlePartitionCerts"`
}
