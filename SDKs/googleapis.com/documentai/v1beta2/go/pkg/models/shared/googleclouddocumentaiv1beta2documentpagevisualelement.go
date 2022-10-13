package shared

type GoogleCloudDocumentaiV1beta2DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout"`
	Type              *string                                                    `json:"type"`
}
