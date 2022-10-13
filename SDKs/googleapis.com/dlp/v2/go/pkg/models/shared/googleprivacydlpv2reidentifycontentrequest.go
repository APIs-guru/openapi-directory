package shared

type GooglePrivacyDlpV2ReidentifyContentRequest struct {
	InspectConfig          *GooglePrivacyDlpV2InspectConfig    `json:"inspectConfig"`
	InspectTemplateName    *string                             `json:"inspectTemplateName"`
	Item                   *GooglePrivacyDlpV2ContentItem      `json:"item"`
	LocationID             *string                             `json:"locationId"`
	ReidentifyConfig       *GooglePrivacyDlpV2DeidentifyConfig `json:"reidentifyConfig"`
	ReidentifyTemplateName *string                             `json:"reidentifyTemplateName"`
}
