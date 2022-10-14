package shared

type GoogleCloudDocumentaiV1beta2DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout,omitempty"`
	Type              *string                                                    `json:"type,omitempty"`
}
