package shared

type GoogleCloudDocumentaiV1DocumentPageToken struct {
	DetectedBreak     *GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak `json:"detectedBreak"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage  `json:"detectedLanguages"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout             `json:"layout"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance             `json:"provenance"`
}
