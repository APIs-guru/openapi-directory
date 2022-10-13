package shared

type GooglePrivacyDlpV2RedactImageResponse struct {
	ExtractedText *string                          `json:"extractedText"`
	InspectResult *GooglePrivacyDlpV2InspectResult `json:"inspectResult"`
	RedactedImage *string                          `json:"redactedImage"`
}
