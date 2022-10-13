package shared

type GoogleCloudDocumentaiV1beta2DocumentPageLine struct {
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout            `json:"layout"`
	Provenance        *GoogleCloudDocumentaiV1beta2DocumentProvenance            `json:"provenance"`
}
