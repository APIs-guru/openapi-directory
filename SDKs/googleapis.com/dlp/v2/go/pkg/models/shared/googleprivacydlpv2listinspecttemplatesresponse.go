package shared

type GooglePrivacyDlpV2ListInspectTemplatesResponse struct {
	InspectTemplates []GooglePrivacyDlpV2InspectTemplate `json:"inspectTemplates"`
	NextPageToken    *string                             `json:"nextPageToken"`
}
