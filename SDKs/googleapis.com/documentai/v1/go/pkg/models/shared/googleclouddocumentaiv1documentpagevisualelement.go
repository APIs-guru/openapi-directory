package shared

// GoogleCloudDocumentaiV1DocumentPageVisualElement
// Detected non-text visual elements e.g. checkbox, signature etc. on the page.
type GoogleCloudDocumentaiV1DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout,omitempty"`
	Type              *string                                               `json:"type,omitempty"`
}
