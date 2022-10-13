package shared

type GoogleCloudDocumentaiV1DocumentTextChange struct {
	ChangedText *string                                     `json:"changedText"`
	Provenance  []GoogleCloudDocumentaiV1DocumentProvenance `json:"provenance"`
	TextAnchor  *GoogleCloudDocumentaiV1DocumentTextAnchor  `json:"textAnchor"`
}
