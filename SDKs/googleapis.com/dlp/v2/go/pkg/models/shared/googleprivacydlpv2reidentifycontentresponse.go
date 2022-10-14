package shared

type GooglePrivacyDlpV2ReidentifyContentResponse struct {
	Item     *GooglePrivacyDlpV2ContentItem            `json:"item,omitempty"`
	Overview *GooglePrivacyDlpV2TransformationOverview `json:"overview,omitempty"`
}
