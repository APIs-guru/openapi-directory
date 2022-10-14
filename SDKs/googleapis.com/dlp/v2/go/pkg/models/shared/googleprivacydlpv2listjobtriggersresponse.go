package shared

type GooglePrivacyDlpV2ListJobTriggersResponse struct {
	JobTriggers   []GooglePrivacyDlpV2JobTrigger `json:"jobTriggers,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
