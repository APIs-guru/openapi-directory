package shared

// GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment
// A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset
type GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment struct {
	EndIndex   *string `json:"endIndex,omitempty"`
	StartIndex *string `json:"startIndex,omitempty"`
}
