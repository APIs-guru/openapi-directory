package shared

// GoogleCloudDocumentaiV1beta2Document
// Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.
type GoogleCloudDocumentaiV1beta2Document struct {
	Content         *string                                              `json:"content,omitempty"`
	Entities        []GoogleCloudDocumentaiV1beta2DocumentEntity         `json:"entities,omitempty"`
	EntityRelations []GoogleCloudDocumentaiV1beta2DocumentEntityRelation `json:"entityRelations,omitempty"`
	Error           *GoogleRPCStatus                                     `json:"error,omitempty"`
	Labels          []GoogleCloudDocumentaiV1beta2DocumentLabel          `json:"labels,omitempty"`
	MimeType        *string                                              `json:"mimeType,omitempty"`
	Pages           []GoogleCloudDocumentaiV1beta2DocumentPage           `json:"pages,omitempty"`
	Revisions       []GoogleCloudDocumentaiV1beta2DocumentRevision       `json:"revisions,omitempty"`
	ShardInfo       *GoogleCloudDocumentaiV1beta2DocumentShardInfo       `json:"shardInfo,omitempty"`
	Text            *string                                              `json:"text,omitempty"`
	TextChanges     []GoogleCloudDocumentaiV1beta2DocumentTextChange     `json:"textChanges,omitempty"`
	TextStyles      []GoogleCloudDocumentaiV1beta2DocumentStyle          `json:"textStyles,omitempty"`
	URI             *string                                              `json:"uri,omitempty"`
}
