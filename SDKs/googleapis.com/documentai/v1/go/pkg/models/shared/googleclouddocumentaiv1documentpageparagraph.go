package shared

// GoogleCloudDocumentaiV1DocumentPageParagraph
// A collection of lines that a human would perceive as a paragraph.
type GoogleCloudDocumentaiV1DocumentPageParagraph struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance,omitempty"`
}
