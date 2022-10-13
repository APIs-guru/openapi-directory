package shared

type GooglePrivacyDlpV2ListJobTriggersResponse struct {
	JobTriggers   []GooglePrivacyDlpV2JobTrigger `json:"jobTriggers"`
	NextPageToken *string                        `json:"nextPageToken"`
}
