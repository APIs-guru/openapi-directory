package shared

type GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum string

const (
	GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumHorizontalAlignmentUnspecified GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumLeading                        GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum = "LEADING"
	GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumCenter                         GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum = "CENTER"
	GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnumTrailing                       GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum = "TRAILING"
)

type GoogleCloudDialogflowV2beta1IntentMessageColumnProperties struct {
	Header              *string                                                                           `json:"header,omitempty"`
	HorizontalAlignment *GoogleCloudDialogflowV2beta1IntentMessageColumnPropertiesHorizontalAlignmentEnum `json:"horizontalAlignment,omitempty"`
}
