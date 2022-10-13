package shared

type GooglePrivacyDlpV2InspectContentRequest struct {
	InspectConfig       *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig"`
	InspectTemplateName *string                          `json:"inspectTemplateName"`
	Item                *GooglePrivacyDlpV2ContentItem   `json:"item"`
	LocationID          *string                          `json:"locationId"`
}
