package shared

type GooglePrivacyDlpV2ListDlpJobsResponse struct {
	Jobs          []GooglePrivacyDlpV2DlpJob `json:"jobs,omitempty"`
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
}
