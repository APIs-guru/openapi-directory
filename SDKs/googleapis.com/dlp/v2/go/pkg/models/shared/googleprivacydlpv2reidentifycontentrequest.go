package shared

// GooglePrivacyDlpV2ReidentifyContentRequest
// Request to re-identify an item.
type GooglePrivacyDlpV2ReidentifyContentRequest struct {
	InspectConfig          *GooglePrivacyDlpV2InspectConfig    `json:"inspectConfig,omitempty"`
	InspectTemplateName    *string                             `json:"inspectTemplateName,omitempty"`
	Item                   *GooglePrivacyDlpV2ContentItem      `json:"item,omitempty"`
	LocationID             *string                             `json:"locationId,omitempty"`
	ReidentifyConfig       *GooglePrivacyDlpV2DeidentifyConfig `json:"reidentifyConfig,omitempty"`
	ReidentifyTemplateName *string                             `json:"reidentifyTemplateName,omitempty"`
}
