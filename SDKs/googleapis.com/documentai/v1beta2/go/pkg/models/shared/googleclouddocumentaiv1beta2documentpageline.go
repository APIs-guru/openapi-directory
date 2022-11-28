package shared

// GoogleCloudDocumentaiV1beta2DocumentPageLine
// A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.
type GoogleCloudDocumentaiV1beta2DocumentPageLine struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance,omitempty"`
}
