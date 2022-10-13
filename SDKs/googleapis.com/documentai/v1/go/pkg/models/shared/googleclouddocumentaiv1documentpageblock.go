package shared

type GoogleCloudDocumentaiV1DocumentPageBlock struct {
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout            `json:"layout"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance            `json:"provenance"`
}
