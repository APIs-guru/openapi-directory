package shared

type Features struct {
	ExtractDocumentSentiment *bool `json:"extractDocumentSentiment"`
	ExtractEntities          *bool `json:"extractEntities"`
	ExtractSyntax            *bool `json:"extractSyntax"`
}
