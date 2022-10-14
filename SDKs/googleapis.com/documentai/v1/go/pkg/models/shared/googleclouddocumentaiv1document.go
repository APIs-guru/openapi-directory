package shared

type GoogleCloudDocumentaiV1Document struct {
	Content         *string                                         `json:"content,omitempty"`
	Entities        []GoogleCloudDocumentaiV1DocumentEntity         `json:"entities,omitempty"`
	EntityRelations []GoogleCloudDocumentaiV1DocumentEntityRelation `json:"entityRelations,omitempty"`
	Error           *GoogleRPCStatus                                `json:"error,omitempty"`
	MimeType        *string                                         `json:"mimeType,omitempty"`
	Pages           []GoogleCloudDocumentaiV1DocumentPage           `json:"pages,omitempty"`
	Revisions       []GoogleCloudDocumentaiV1DocumentRevision       `json:"revisions,omitempty"`
	ShardInfo       *GoogleCloudDocumentaiV1DocumentShardInfo       `json:"shardInfo,omitempty"`
	Text            *string                                         `json:"text,omitempty"`
	TextChanges     []GoogleCloudDocumentaiV1DocumentTextChange     `json:"textChanges,omitempty"`
	TextStyles      []GoogleCloudDocumentaiV1DocumentStyle          `json:"textStyles,omitempty"`
	URI             *string                                         `json:"uri,omitempty"`
}
