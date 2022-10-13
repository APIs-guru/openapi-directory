package shared

type GooglePrivacyDlpV2JobTriggerStatusEnum string

const (
	GooglePrivacyDlpV2JobTriggerStatusEnumStatusUnspecified GooglePrivacyDlpV2JobTriggerStatusEnum = "STATUS_UNSPECIFIED"
	GooglePrivacyDlpV2JobTriggerStatusEnumHealthy           GooglePrivacyDlpV2JobTriggerStatusEnum = "HEALTHY"
	GooglePrivacyDlpV2JobTriggerStatusEnumPaused            GooglePrivacyDlpV2JobTriggerStatusEnum = "PAUSED"
	GooglePrivacyDlpV2JobTriggerStatusEnumCancelled         GooglePrivacyDlpV2JobTriggerStatusEnum = "CANCELLED"
)

type GooglePrivacyDlpV2JobTrigger struct {
	CreateTime  *string                                 `json:"createTime"`
	Description *string                                 `json:"description"`
	DisplayName *string                                 `json:"displayName"`
	Errors      []GooglePrivacyDlpV2Error               `json:"errors"`
	InspectJob  *GooglePrivacyDlpV2InspectJobConfig     `json:"inspectJob"`
	LastRunTime *string                                 `json:"lastRunTime"`
	Name        *string                                 `json:"name"`
	Status      *GooglePrivacyDlpV2JobTriggerStatusEnum `json:"status"`
	Triggers    []GooglePrivacyDlpV2Trigger             `json:"triggers"`
	UpdateTime  *string                                 `json:"updateTime"`
}
