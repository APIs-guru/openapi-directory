package shared

type Features struct {
	ClassificationModelOptions *ClassificationModelOptions `json:"classificationModelOptions"`
	ClassifyText               *bool                       `json:"classifyText"`
	ExtractDocumentSentiment   *bool                       `json:"extractDocumentSentiment"`
	ExtractEntities            *bool                       `json:"extractEntities"`
	ExtractEntitySentiment     *bool                       `json:"extractEntitySentiment"`
	ExtractSyntax              *bool                       `json:"extractSyntax"`
}
