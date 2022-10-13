package shared

type GoogleCloudDocumentaiV1DocumentTextAnchor struct {
	Content      *string                                                `json:"content"`
	TextSegments []GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment `json:"textSegments"`
}
