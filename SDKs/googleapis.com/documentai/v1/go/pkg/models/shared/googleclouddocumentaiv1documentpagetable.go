package shared

// GoogleCloudDocumentaiV1DocumentPageTable
// A table representation similar to HTML table structure.
type GoogleCloudDocumentaiV1DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1DocumentPageTableTableRow    `json:"bodyRows,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	HeaderRows        []GoogleCloudDocumentaiV1DocumentPageTableTableRow    `json:"headerRows,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance,omitempty"`
}
