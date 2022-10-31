package shared

type GooglePrivacyDlpV2ListDeidentifyTemplatesResponse struct {
	DeidentifyTemplates []GooglePrivacyDlpV2DeidentifyTemplate `json:"deidentifyTemplates,omitempty"`
	NextPageToken       *string                                `json:"nextPageToken,omitempty"`
}
