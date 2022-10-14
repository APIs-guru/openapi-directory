package shared

type GooglePrivacyDlpV2ContentItem struct {
	ByteItem *GooglePrivacyDlpV2ByteContentItem `json:"byteItem,omitempty"`
	Table    *GooglePrivacyDlpV2Table           `json:"table,omitempty"`
	Value    *string                            `json:"value,omitempty"`
}
