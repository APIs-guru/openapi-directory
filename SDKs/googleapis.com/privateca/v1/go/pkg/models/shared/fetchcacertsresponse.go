package shared

type FetchCaCertsResponse struct {
	CaCerts []CertChain `json:"caCerts"`
}
