package shared

// GoogleCloudDocumentaiV1DocumentPageSymbol
// A detected symbol.
type GoogleCloudDocumentaiV1DocumentPageSymbol struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
}
