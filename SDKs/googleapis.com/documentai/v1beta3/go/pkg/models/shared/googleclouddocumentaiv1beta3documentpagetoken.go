package shared

type GoogleCloudDocumentaiV1beta3DocumentPageToken struct {
	DetectedBreak     *GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak `json:"detectedBreak"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage  `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout             `json:"layout"`
	Provenance        *GoogleCloudDocumentaiV1beta3DocumentProvenance             `json:"provenance"`
}
