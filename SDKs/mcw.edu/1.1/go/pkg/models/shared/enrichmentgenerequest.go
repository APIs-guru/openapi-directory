package shared

type EnrichmentGeneRequest struct {
	AccID       *string  `json:"accId"`
	GeneSymbols []string `json:"geneSymbols"`
	Species     *string  `json:"species"`
}
