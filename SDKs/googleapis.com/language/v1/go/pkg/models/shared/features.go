package shared

type Features struct {
	ClassificationModelOptions *ClassificationModelOptions `json:"classificationModelOptions,omitempty"`
	ClassifyText               *bool                       `json:"classifyText,omitempty"`
	ExtractDocumentSentiment   *bool                       `json:"extractDocumentSentiment,omitempty"`
	ExtractEntities            *bool                       `json:"extractEntities,omitempty"`
	ExtractEntitySentiment     *bool                       `json:"extractEntitySentiment,omitempty"`
	ExtractSyntax              *bool                       `json:"extractSyntax,omitempty"`
}
