package shared

// GoogleCloudDocumentaiV1beta2DocumentPageSymbol
// A detected symbol.
type GoogleCloudDocumentaiV1beta2DocumentPageSymbol struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
}
