package shared

// GooglePrivacyDlpV2ListInspectTemplatesResponse
// Response message for ListInspectTemplates.
type GooglePrivacyDlpV2ListInspectTemplatesResponse struct {
	InspectTemplates []GooglePrivacyDlpV2InspectTemplate `json:"inspectTemplates,omitempty"`
	NextPageToken    *string                             `json:"nextPageToken,omitempty"`
}
