package shared

// GoogleCloudDocumentaiV1beta3DocumentPageToken
// A detected token.
type GoogleCloudDocumentaiV1beta3DocumentPageToken struct {
	DetectedBreak     *GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak `json:"detectedBreak,omitempty"`
	DetectedLanguages []GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage  `json:"detectedLanguages,omitempty"`
	Layout            *GoogleCloudDocumentaiV1beta3DocumentPageLayout             `json:"layout,omitempty"`
	Provenance        *GoogleCloudDocumentaiV1beta3DocumentProvenance             `json:"provenance,omitempty"`
}
