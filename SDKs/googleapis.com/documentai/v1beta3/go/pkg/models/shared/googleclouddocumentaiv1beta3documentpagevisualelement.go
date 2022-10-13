package shared

type GoogleCloudDocumentaiV1beta3DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout"`
	Type              *string                                                    `json:"type"`
}
