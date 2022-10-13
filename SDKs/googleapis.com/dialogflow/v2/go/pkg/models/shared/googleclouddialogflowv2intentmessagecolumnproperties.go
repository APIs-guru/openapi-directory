package shared

type GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum string

const (
	GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading                        GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum = "LEADING"
	GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter                         GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum = "CENTER"
	GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing                       GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum = "TRAILING"
)

type GoogleCloudDialogflowV2IntentMessageColumnProperties struct {
	Header              *string                                                                      `json:"header"`
	HorizontalAlignment *GoogleCloudDialogflowV2IntentMessageColumnPropertiesHorizontalAlignmentEnum `json:"horizontalAlignment"`
}
