package shared

// GooglePrivacyDlpV2RedactImageRequest
// Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.
type GooglePrivacyDlpV2RedactImageRequest struct {
	ByteItem              *GooglePrivacyDlpV2ByteContentItem       `json:"byteItem,omitempty"`
	ImageRedactionConfigs []GooglePrivacyDlpV2ImageRedactionConfig `json:"imageRedactionConfigs,omitempty"`
	IncludeFindings       *bool                                    `json:"includeFindings,omitempty"`
	InspectConfig         *GooglePrivacyDlpV2InspectConfig         `json:"inspectConfig,omitempty"`
	LocationID            *string                                  `json:"locationId,omitempty"`
}
