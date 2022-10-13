package shared

type GooglePrivacyDlpV2CreateJobTriggerRequest struct {
	JobTrigger *GooglePrivacyDlpV2JobTrigger `json:"jobTrigger"`
	LocationID *string                       `json:"locationId"`
	TriggerID  *string                       `json:"triggerId"`
}
