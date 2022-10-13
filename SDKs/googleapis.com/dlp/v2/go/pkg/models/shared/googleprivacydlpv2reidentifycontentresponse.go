package shared

type GooglePrivacyDlpV2ReidentifyContentResponse struct {
	Item     *GooglePrivacyDlpV2ContentItem            `json:"item"`
	Overview *GooglePrivacyDlpV2TransformationOverview `json:"overview"`
}
