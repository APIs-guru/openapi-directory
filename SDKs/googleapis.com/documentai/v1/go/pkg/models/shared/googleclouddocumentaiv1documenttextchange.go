package shared

// GoogleCloudDocumentaiV1DocumentTextChange
// This message is used for text changes aka. OCR corrections.
type GoogleCloudDocumentaiV1DocumentTextChange struct {
	ChangedText *string                                     `json:"changedText,omitempty"`
	Provenance  []GoogleCloudDocumentaiV1DocumentProvenance `json:"provenance,omitempty"`
	TextAnchor  *GoogleCloudDocumentaiV1DocumentTextAnchor  `json:"textAnchor,omitempty"`
}
