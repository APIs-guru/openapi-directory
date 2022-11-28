package shared

// GoogleCloudDocumentaiV1beta2DocumentPageBlock
// A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.
type GoogleCloudDocumentaiV1beta2DocumentPageBlock struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance,omitempty"`
}
