package shared

// GoogleCloudDocumentaiV1DocumentPageBlock
// A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
type GoogleCloudDocumentaiV1DocumentPageBlock struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance,omitempty"`
}
