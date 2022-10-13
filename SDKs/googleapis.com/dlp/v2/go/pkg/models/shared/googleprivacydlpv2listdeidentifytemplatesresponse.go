package shared

type GooglePrivacyDlpV2ListDeidentifyTemplatesResponse struct {
	DeidentifyTemplates []GooglePrivacyDlpV2DeidentifyTemplate `json:"deidentifyTemplates"`
	NextPageToken       *string                                `json:"nextPageToken"`
}
