package shared

type GoogleCloudDocumentaiV1DocumentPageSymbol struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout"`
}
