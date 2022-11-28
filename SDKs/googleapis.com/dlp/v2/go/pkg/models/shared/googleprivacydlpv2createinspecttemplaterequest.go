package shared

// GooglePrivacyDlpV2CreateInspectTemplateRequestInput
// Request message for CreateInspectTemplate.
type GooglePrivacyDlpV2CreateInspectTemplateRequestInput struct {
	InspectTemplate *GooglePrivacyDlpV2InspectTemplateInput `json:"inspectTemplate,omitempty"`
	LocationID      *string                                 `json:"locationId,omitempty"`
	TemplateID      *string                                 `json:"templateId,omitempty"`
}
