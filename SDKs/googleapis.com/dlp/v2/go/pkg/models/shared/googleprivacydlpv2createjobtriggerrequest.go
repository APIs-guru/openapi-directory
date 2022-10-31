package shared

type GooglePrivacyDlpV2CreateJobTriggerRequest struct {
	JobTrigger *GooglePrivacyDlpV2JobTrigger `json:"jobTrigger,omitempty"`
	LocationID *string                       `json:"locationId,omitempty"`
	TriggerID  *string                       `json:"triggerId,omitempty"`
}
