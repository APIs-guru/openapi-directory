package shared

// GoogleCloudDocumentaiV1beta3DocumentPageBlock
// A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
type GoogleCloudDocumentaiV1beta3DocumentPageBlock struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance,omitempty"`
}
