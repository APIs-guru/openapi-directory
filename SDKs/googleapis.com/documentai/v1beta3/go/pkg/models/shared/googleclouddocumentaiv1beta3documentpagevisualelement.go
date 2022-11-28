package shared

// GoogleCloudDocumentaiV1beta3DocumentPageVisualElement
// Detected non-text visual elements e.g. checkbox, signature etc. on the page.
type GoogleCloudDocumentaiV1beta3DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
	Type              *string                                                    `json:"type,omitempty"`
}
