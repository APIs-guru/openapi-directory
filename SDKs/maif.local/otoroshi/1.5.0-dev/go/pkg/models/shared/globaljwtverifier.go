package shared

// GlobalJwtVerifier
// A JWT verifier used by multiple service descriptor
type GlobalJwtVerifier struct {
	AlgoSettings interface{} `json:"algoSettings"`
	Desc         string      `json:"desc"`
	Enabled      bool        `json:"enabled"`
	ID           string      `json:"id"`
	Name         string      `json:"name"`
	Source       interface{} `json:"source"`
	Strategy     interface{} `json:"strategy"`
	Strict       bool        `json:"strict"`
}
