package shared

// GooglePrivacyDlpV2RedactImageResponse
// Results of redacting an image.
type GooglePrivacyDlpV2RedactImageResponse struct {
	ExtractedText *string                          `json:"extractedText,omitempty"`
	InspectResult *GooglePrivacyDlpV2InspectResult `json:"inspectResult,omitempty"`
	RedactedImage *string                          `json:"redactedImage,omitempty"`
}
