package shared

// GoogleCloudDocumentaiV1beta2DocumentPageVisualElement
// Detected non-text visual elements e.g. checkbox, signature etc. on the page.
type GoogleCloudDocumentaiV1beta2DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
	Type              *string                                                    `json:"type,omitempty"`
}
