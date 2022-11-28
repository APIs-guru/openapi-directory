package shared

// GooglePrivacyDlpV2ListJobTriggersResponse
// Response message for ListJobTriggers.
type GooglePrivacyDlpV2ListJobTriggersResponse struct {
	JobTriggers   []GooglePrivacyDlpV2JobTrigger `json:"jobTriggers,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
