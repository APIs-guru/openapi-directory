package shared

// GooglePrivacyDlpV2ListDeidentifyTemplatesResponse
// Response message for ListDeidentifyTemplates.
type GooglePrivacyDlpV2ListDeidentifyTemplatesResponse struct {
	DeidentifyTemplates []GooglePrivacyDlpV2DeidentifyTemplate `json:"deidentifyTemplates,omitempty"`
	NextPageToken       *string                                `json:"nextPageToken,omitempty"`
}
