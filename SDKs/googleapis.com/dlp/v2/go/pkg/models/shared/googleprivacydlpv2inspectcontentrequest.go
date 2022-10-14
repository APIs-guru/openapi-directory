package shared

type GooglePrivacyDlpV2InspectContentRequest struct {
	InspectConfig       *GooglePrivacyDlpV2InspectConfig `json:"inspectConfig,omitempty"`
	InspectTemplateName *string                          `json:"inspectTemplateName,omitempty"`
	Item                *GooglePrivacyDlpV2ContentItem   `json:"item,omitempty"`
	LocationID          *string                          `json:"locationId,omitempty"`
}
