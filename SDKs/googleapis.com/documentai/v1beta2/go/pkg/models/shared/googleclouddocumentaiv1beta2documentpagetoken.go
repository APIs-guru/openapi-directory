package shared

// GoogleCloudDocumentaiV1beta2DocumentPageToken
// A detected token.
type GoogleCloudDocumentaiV1beta2DocumentPageToken struct {
	DetectedBreak     *GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak `json:"detectedBreak,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage  `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta2DocumentPageLayout             `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta2DocumentProvenance             `json:"provenance,omitempty"`
}
