package shared

// GoogleCloudDocumentaiV1beta3DocumentPageLine
// A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
type GoogleCloudDocumentaiV1beta3DocumentPageLine struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance,omitempty"`
}
