package shared

type GooglePrivacyDlpV2JobTriggerStatusEnum string

const (
	GooglePrivacyDlpV2JobTriggerStatusEnumStatusUnspecified GooglePrivacyDlpV2JobTriggerStatusEnum = "STATUS_UNSPECIFIED"
	GooglePrivacyDlpV2JobTriggerStatusEnumHealthy           GooglePrivacyDlpV2JobTriggerStatusEnum = "HEALTHY"
	GooglePrivacyDlpV2JobTriggerStatusEnumPaused            GooglePrivacyDlpV2JobTriggerStatusEnum = "PAUSED"
	GooglePrivacyDlpV2JobTriggerStatusEnumCancelled         GooglePrivacyDlpV2JobTriggerStatusEnum = "CANCELLED"
)

// GooglePrivacyDlpV2JobTrigger
// Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
type GooglePrivacyDlpV2JobTrigger struct {
	CreateTime  *string                                 `json:"createTime,omitempty"`
	Description *string                                 `json:"description,omitempty"`
	DisplayName *string                                 `json:"displayName,omitempty"`
	Errors      []GooglePrivacyDlpV2Error               `json:"errors,omitempty"`
	InspectJob  *GooglePrivacyDlpV2InspectJobConfig     `json:"inspectJob,omitempty"`
	LastRunTime *string                                 `json:"lastRunTime,omitempty"`
	Name        *string                                 `json:"name,omitempty"`
	Status      *GooglePrivacyDlpV2JobTriggerStatusEnum `json:"status,omitempty"`
	Triggers    []GooglePrivacyDlpV2Trigger             `json:"triggers,omitempty"`
	UpdateTime  *string                                 `json:"updateTime,omitempty"`
}

// GooglePrivacyDlpV2JobTriggerInput
// Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
type GooglePrivacyDlpV2JobTriggerInput struct {
	Description *string                                 `json:"description,omitempty"`
	DisplayName *string                                 `json:"displayName,omitempty"`
	InspectJob  *GooglePrivacyDlpV2InspectJobConfig     `json:"inspectJob,omitempty"`
	Name        *string                                 `json:"name,omitempty"`
	Status      *GooglePrivacyDlpV2JobTriggerStatusEnum `json:"status,omitempty"`
	Triggers    []GooglePrivacyDlpV2Trigger             `json:"triggers,omitempty"`
}
