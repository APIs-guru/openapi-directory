package shared

type GoogleCloudDocumentaiV1DocumentTextChange struct {
	ChangedText *string                                     `json:"changedText,omitempty"`
	Provenance  []GoogleCloudDocumentaiV1DocumentProvenance `json:"provenance,omitempty"`
	TextAnchor  *GoogleCloudDocumentaiV1DocumentTextAnchor  `json:"textAnchor,omitempty"`
}
