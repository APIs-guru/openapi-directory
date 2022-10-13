package shared

type GoogleCloudDocumentaiV1beta3DocumentTextAnchor struct {
	Content      *string                                                     `json:"content"`
	TextSegments []GoogleCloudDocumentaiV1beta3DocumentTextAnchorTextSegment `json:"textSegments"`
}
