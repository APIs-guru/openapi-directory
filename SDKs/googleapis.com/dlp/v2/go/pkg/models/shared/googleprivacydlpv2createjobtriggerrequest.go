package shared

// GooglePrivacyDlpV2CreateJobTriggerRequestInput
// Request message for CreateJobTrigger.
type GooglePrivacyDlpV2CreateJobTriggerRequestInput struct {
	JobTrigger *GooglePrivacyDlpV2JobTriggerInput `json:"jobTrigger,omitempty"`
	LocationID *string                            `json:"locationId,omitempty"`
	TriggerID  *string                            `json:"triggerId,omitempty"`
}
