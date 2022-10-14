package shared

type GooglePrivacyDlpV2RedactImageResponse struct {
	ExtractedText *string                          `json:"extractedText,omitempty"`
	InspectResult *GooglePrivacyDlpV2InspectResult `json:"inspectResult,omitempty"`
	RedactedImage *string                          `json:"redactedImage,omitempty"`
}
