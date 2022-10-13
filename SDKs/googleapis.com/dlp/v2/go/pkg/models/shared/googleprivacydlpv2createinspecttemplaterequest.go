package shared

type GooglePrivacyDlpV2CreateInspectTemplateRequest struct {
	InspectTemplate *GooglePrivacyDlpV2InspectTemplate `json:"inspectTemplate"`
	LocationID      *string                            `json:"locationId"`
	TemplateID      *string                            `json:"templateId"`
}
