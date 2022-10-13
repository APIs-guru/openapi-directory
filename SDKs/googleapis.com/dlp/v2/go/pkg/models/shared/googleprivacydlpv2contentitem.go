package shared

type GooglePrivacyDlpV2ContentItem struct {
	ByteItem *GooglePrivacyDlpV2ByteContentItem `json:"byteItem"`
	Table    *GooglePrivacyDlpV2Table           `json:"table"`
	Value    *string                            `json:"value"`
}
