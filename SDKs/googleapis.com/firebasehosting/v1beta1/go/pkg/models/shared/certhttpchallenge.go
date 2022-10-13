package shared

type CertHTTPChallenge struct {
	Path  *string `json:"path"`
	Token *string `json:"token"`
}
