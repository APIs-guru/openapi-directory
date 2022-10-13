package shared

type GoogleCloudDocumentaiV1beta3Document struct {
	Content         *string                                              `json:"content"`
	Entities        []GoogleCloudDocumentaiV1beta3DocumentEntity         `json:"entities"`
	EntityRelations []GoogleCloudDocumentaiV1beta3DocumentEntityRelation `json:"entityRelations"`
	Error           *GoogleRPCStatus                                     `json:"error"`
	MimeType        *string                                              `json:"mimeType"`
	Pages           []GoogleCloudDocumentaiV1beta3DocumentPage           `json:"pages"`
	Revisions       []GoogleCloudDocumentaiV1beta3DocumentRevision       `json:"revisions"`
	ShardInfo       *GoogleCloudDocumentaiV1beta3DocumentShardInfo       `json:"shardInfo"`
	Text            *string                                              `json:"text"`
	TextChanges     []GoogleCloudDocumentaiV1beta3DocumentTextChange     `json:"textChanges"`
	TextStyles      []GoogleCloudDocumentaiV1beta3DocumentStyle          `json:"textStyles"`
	URI             *string                                              `json:"uri"`
}
