package shared

type GoogleCloudDocumentaiV1beta3DocumentTextChange struct {
	ChangedText *string                                          `json:"changedText"`
	Provenance  []GoogleCloudDocumentaiV1beta3DocumentProvenance `json:"provenance"`
	TextAnchor  *GoogleCloudDocumentaiV1beta3DocumentTextAnchor  `json:"textAnchor"`
}
