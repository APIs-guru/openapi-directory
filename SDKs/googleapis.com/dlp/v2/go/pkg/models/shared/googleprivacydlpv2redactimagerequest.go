package shared

type GooglePrivacyDlpV2RedactImageRequest struct {
	ByteItem              *GooglePrivacyDlpV2ByteContentItem       `json:"byteItem"`
	ImageRedactionConfigs []GooglePrivacyDlpV2ImageRedactionConfig `json:"imageRedactionConfigs"`
	IncludeFindings       *bool                                    `json:"includeFindings"`
	InspectConfig         *GooglePrivacyDlpV2InspectConfig         `json:"inspectConfig"`
	LocationID            *string                                  `json:"locationId"`
}
