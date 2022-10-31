package shared

type GoogleCloudDocumentaiV1beta3DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
	Type              *string                                                    `json:"type,omitempty"`
}
