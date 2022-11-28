package shared

// GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput
// Request message for CreateDeidentifyTemplate.
type GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput struct {
	DeidentifyTemplate *GooglePrivacyDlpV2DeidentifyTemplateInput `json:"deidentifyTemplate,omitempty"`
	LocationID         *string                                    `json:"locationId,omitempty"`
	TemplateID         *string                                    `json:"templateId,omitempty"`
}
