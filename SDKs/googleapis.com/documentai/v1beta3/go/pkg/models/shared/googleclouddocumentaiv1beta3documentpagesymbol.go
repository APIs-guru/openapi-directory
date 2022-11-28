package shared

// GoogleCloudDocumentaiV1beta3DocumentPageSymbol
// A detected symbol.
type GoogleCloudDocumentaiV1beta3DocumentPageSymbol struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
}
