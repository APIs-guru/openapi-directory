package shared

// GooglePrivacyDlpV2ReidentifyContentResponse
// Results of re-identifying an item.
type GooglePrivacyDlpV2ReidentifyContentResponse struct {
	Item     *GooglePrivacyDlpV2ContentItem            `json:"item,omitempty"`
	Overview *GooglePrivacyDlpV2TransformationOverview `json:"overview,omitempty"`
}
