package shared

type GooglePrivacyDlpV2DeidentifyContentResponse struct {
	Item     *GooglePrivacyDlpV2ContentItem            `json:"item"`
	Overview *GooglePrivacyDlpV2TransformationOverview `json:"overview"`
}
