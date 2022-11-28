package shared

// GooglePrivacyDlpV2DeidentifyContentResponse
// Results of de-identifying a ContentItem.
type GooglePrivacyDlpV2DeidentifyContentResponse struct {
	Item     *GooglePrivacyDlpV2ContentItem            `json:"item,omitempty"`
	Overview *GooglePrivacyDlpV2TransformationOverview `json:"overview,omitempty"`
}
