package shared

// GoogleCloudDocumentaiV1beta3DocumentTextChange
// This message is used for text changes aka. OCR corrections.
type GoogleCloudDocumentaiV1beta3DocumentTextChange struct {
	ChangedText *string                                          `json:"changedText,omitempty"`
	Provenance  []GoogleCloudDocumentaiV1beta3DocumentProvenance `json:"provenance,omitempty"`
	TextAnchor  *GoogleCloudDocumentaiV1beta3DocumentTextAnchor  `json:"textAnchor,omitempty"`
}
