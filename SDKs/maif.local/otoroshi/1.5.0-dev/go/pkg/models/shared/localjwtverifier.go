package shared

// LocalJwtVerifier
// A JWT verifier used only for the current service descriptor
type LocalJwtVerifier struct {
	AlgoSettings interface{} `json:"algoSettings"`
	Enabled      bool        `json:"enabled"`
	Source       interface{} `json:"source"`
	Strategy     interface{} `json:"strategy"`
	Strict       bool        `json:"strict"`
	Type         string      `json:"type"`
}
