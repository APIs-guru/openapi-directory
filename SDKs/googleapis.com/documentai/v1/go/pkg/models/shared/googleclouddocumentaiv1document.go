package shared

type GoogleCloudDocumentaiV1Document struct {
	Content         *string                                         `json:"content"`
	Entities        []GoogleCloudDocumentaiV1DocumentEntity         `json:"entities"`
	EntityRelations []GoogleCloudDocumentaiV1DocumentEntityRelation `json:"entityRelations"`
	Error           *GoogleRPCStatus                                `json:"error"`
	MimeType        *string                                         `json:"mimeType"`
	Pages           []GoogleCloudDocumentaiV1DocumentPage           `json:"pages"`
	Revisions       []GoogleCloudDocumentaiV1DocumentRevision       `json:"revisions"`
	ShardInfo       *GoogleCloudDocumentaiV1DocumentShardInfo       `json:"shardInfo"`
	Text            *string                                         `json:"text"`
	TextChanges     []GoogleCloudDocumentaiV1DocumentTextChange     `json:"textChanges"`
	TextStyles      []GoogleCloudDocumentaiV1DocumentStyle          `json:"textStyles"`
	URI             *string                                         `json:"uri"`
}
