package shared

// GoogleCloudDocumentaiV1beta2DocumentTextAnchor
// Text reference indexing into the Document.text.
type GoogleCloudDocumentaiV1beta2DocumentTextAnchor struct {
	Content      *string                                                     `json:"content,omitempty"`
	TextSegments []GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment `json:"textSegments,omitempty"`
}
