package shared

type EnrichmentGeneRequest struct {
	AccID       *string  `json:"accId,omitempty"`
	GeneSymbols []string `json:"geneSymbols,omitempty"`
	Species     *string  `json:"species,omitempty"`
}
