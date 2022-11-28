package shared

// Features
// All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input.
type Features struct {
	ExtractDocumentSentiment *bool `json:"extractDocumentSentiment,omitempty"`
	ExtractEntities          *bool `json:"extractEntities,omitempty"`
	ExtractSyntax            *bool `json:"extractSyntax,omitempty"`
}
