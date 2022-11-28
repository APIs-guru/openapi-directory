package shared

// Features
// All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 11
type Features struct {
	ClassificationModelOptions *ClassificationModelOptions `json:"classificationModelOptions,omitempty"`
	ClassifyText               *bool                       `json:"classifyText,omitempty"`
	ExtractDocumentSentiment   *bool                       `json:"extractDocumentSentiment,omitempty"`
	ExtractEntities            *bool                       `json:"extractEntities,omitempty"`
	ExtractEntitySentiment     *bool                       `json:"extractEntitySentiment,omitempty"`
	ExtractSyntax              *bool                       `json:"extractSyntax,omitempty"`
}
