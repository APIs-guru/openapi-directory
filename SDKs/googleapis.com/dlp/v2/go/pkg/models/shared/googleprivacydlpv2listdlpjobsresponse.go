package shared

// GooglePrivacyDlpV2ListDlpJobsResponse
// The response message for listing DLP jobs.
type GooglePrivacyDlpV2ListDlpJobsResponse struct {
	Jobs          []GooglePrivacyDlpV2DlpJob `json:"jobs,omitempty"`
	NextPageToken *string                    `json:"nextPageToken,omitempty"`
}
