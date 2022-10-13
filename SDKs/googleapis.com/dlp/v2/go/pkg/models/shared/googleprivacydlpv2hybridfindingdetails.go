package shared

type GooglePrivacyDlpV2HybridFindingDetails struct {
	ContainerDetails *GooglePrivacyDlpV2Container    `json:"containerDetails"`
	FileOffset       *string                         `json:"fileOffset"`
	Labels           map[string]string               `json:"labels"`
	RowOffset        *string                         `json:"rowOffset"`
	TableOptions     *GooglePrivacyDlpV2TableOptions `json:"tableOptions"`
}
