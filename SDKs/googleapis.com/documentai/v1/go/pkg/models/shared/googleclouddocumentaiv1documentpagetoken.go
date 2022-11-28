package shared

// GoogleCloudDocumentaiV1DocumentPageToken
// A detected token.
type GoogleCloudDocumentaiV1DocumentPageToken struct {
	DetectedBreak     *GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak `json:"detectedBreak,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1DocumentPageDetectedLanguage  `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1DocumentPageLayout             `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1DocumentProvenance             `json:"provenance,omitempty"`
}
