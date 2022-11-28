package shared

// GoogleCloudDocumentaiV1DocumentTextAnchor
// Text reference indexing into the Document.text.
type GoogleCloudDocumentaiV1DocumentTextAnchor struct {
	Content      *string                                                `json:"content,omitempty"`
	TextSegments []GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment `json:"textSegments,omitempty"`
}
