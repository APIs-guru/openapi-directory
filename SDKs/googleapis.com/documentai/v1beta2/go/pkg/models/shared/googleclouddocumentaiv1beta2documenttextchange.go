package shared

type GoogleCloudDocumentaiV1beta2DocumentTextChange struct {
	ChangedText *string                                          `json:"changedText"`
	Provenance  []GoogleCloudDocumentaiV1beta2DocumentProvenance `json:"provenance"`
	TextAnchor  *GoogleCloudDocumentaiV1beta2DocumentTextAnchor  `json:"textAnchor"`
}
