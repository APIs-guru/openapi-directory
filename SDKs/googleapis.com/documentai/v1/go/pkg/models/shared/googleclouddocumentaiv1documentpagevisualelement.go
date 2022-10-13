package shared

type GoogleCloudDocumentaiV1DocumentPageVisualElement struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout"`
	Type              *string                                               `json:"type"`
}
