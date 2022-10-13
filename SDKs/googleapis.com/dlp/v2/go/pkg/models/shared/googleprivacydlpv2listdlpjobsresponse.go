package shared

type GooglePrivacyDlpV2ListDlpJobsResponse struct {
	Jobs          []GooglePrivacyDlpV2DlpJob `json:"jobs"`
	NextPageToken *string                    `json:"nextPageToken"`
}
