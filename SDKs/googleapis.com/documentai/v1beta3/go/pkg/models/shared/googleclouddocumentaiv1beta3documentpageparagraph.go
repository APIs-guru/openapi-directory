package shared

type GoogleCloudDocumentaiV1beta3DocumentPageParagraph struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout            `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta3DocumentProvenance            `json:"provenance,omitempty"`
}
