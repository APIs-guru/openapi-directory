package shared

// GoogleCloudDocumentaiV1beta2DocumentPageTable
// A table representation similar to HTML table structure.
type GoogleCloudDocumentaiV1beta2DocumentPageTable struct {
	BodyRows          []GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow    `json:"bodyRows,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	HeaderRows        []GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow    `json:"headerRows,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance,omitempty"`
}
