package shared

// GoogleCloudDocumentaiV1beta2DocumentPageParagraph
// A collection of lines that a human would perceive as a paragraph.
type GoogleCloudDocumentaiV1beta2DocumentPageParagraph struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance,omitempty"`
}
