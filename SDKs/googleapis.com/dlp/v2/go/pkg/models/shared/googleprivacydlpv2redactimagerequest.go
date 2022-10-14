package shared

type GooglePrivacyDlpV2RedactImageRequest struct {
	ByteItem              *GooglePrivacyDlpV2ByteContentItem       `json:"byteItem,omitempty"`
	ImageRedactionConfigs []GooglePrivacyDlpV2ImageRedactionConfig `json:"imageRedactionConfigs,omitempty"`
	IncludeFindings       *bool                                    `json:"includeFindings,omitempty"`
	InspectConfig         *GooglePrivacyDlpV2InspectConfig         `json:"inspectConfig,omitempty"`
	LocationID            *string                                  `json:"locationId,omitempty"`
}
