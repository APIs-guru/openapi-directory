package shared

type RefJwtVerifier struct {
	Enabled bool   `json:"enabled"`
	ID      string `json:"id"`
	Type    string `json:"type"`
}
