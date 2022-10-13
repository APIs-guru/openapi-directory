package shared

type EnrichmentRequest struct {
	Aspect  *string  `json:"aspect"`
	Genes   []string `json:"genes"`
	Species *string  `json:"species"`
}
