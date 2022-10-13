package shared

type GooglePrivacyDlpV2DeidentifyContentRequest struct {
	DeidentifyConfig       *GooglePrivacyDlpV2DeidentifyConfig `json:"deidentifyConfig"`
	DeidentifyTemplateName *string                             `json:"deidentifyTemplateName"`
	InspectConfig          *GooglePrivacyDlpV2InspectConfig    `json:"inspectConfig"`
	InspectTemplateName    *string                             `json:"inspectTemplateName"`
	Item                   *GooglePrivacyDlpV2ContentItem      `json:"item"`
	LocationID             *string                             `json:"locationId"`
}
