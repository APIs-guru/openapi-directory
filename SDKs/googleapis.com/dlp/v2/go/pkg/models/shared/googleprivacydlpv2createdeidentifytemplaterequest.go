package shared

type GooglePrivacyDlpV2CreateDeidentifyTemplateRequest struct {
	DeidentifyTemplate *GooglePrivacyDlpV2DeidentifyTemplate `json:"deidentifyTemplate"`
	LocationID         *string                               `json:"locationId"`
	TemplateID         *string                               `json:"templateId"`
}
