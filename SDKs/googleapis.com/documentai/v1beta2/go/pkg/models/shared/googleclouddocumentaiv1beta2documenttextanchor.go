package shared

type GoogleCloudDocumentaiV1beta2DocumentTextAnchor struct {
	Content      *string                                                     `json:"content"`
	TextSegments []GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment `json:"textSegments"`
}
