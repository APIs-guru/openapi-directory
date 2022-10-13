package shared

type GoogleCloudDocumentaiV1beta2Document struct {
	Content         *string                                              `json:"content"`
	Entities        []GoogleCloudDocumentaiV1beta2DocumentEntity         `json:"entities"`
	EntityRelations []GoogleCloudDocumentaiV1beta2DocumentEntityRelation `json:"entityRelations"`
	Error           *GoogleRPCStatus                                     `json:"error"`
	Labels          []GoogleCloudDocumentaiV1beta2DocumentLabel          `json:"labels"`
	MimeType        *string                                              `json:"mimeType"`
	Pages           []GoogleCloudDocumentaiV1beta2DocumentPage           `json:"pages"`
	Revisions       []GoogleCloudDocumentaiV1beta2DocumentRevision       `json:"revisions"`
	ShardInfo       *GoogleCloudDocumentaiV1beta2DocumentShardInfo       `json:"shardInfo"`
	Text            *string                                              `json:"text"`
	TextChanges     []GoogleCloudDocumentaiV1beta2DocumentTextChange     `json:"textChanges"`
	TextStyles      []GoogleCloudDocumentaiV1beta2DocumentStyle          `json:"textStyles"`
	URI             *string                                              `json:"uri"`
}
