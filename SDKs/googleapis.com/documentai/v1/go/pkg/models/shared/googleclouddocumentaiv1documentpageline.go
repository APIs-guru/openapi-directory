package shared

// GoogleCloudDocumentaiV1DocumentPageLine
// A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
type GoogleCloudDocumentaiV1DocumentPageLine struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance,omitempty"`
}
