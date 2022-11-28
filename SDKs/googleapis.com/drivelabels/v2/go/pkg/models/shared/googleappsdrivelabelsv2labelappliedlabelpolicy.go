package shared

type GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum string

const (
	GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnumCopyModeUnspecified GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum = "COPY_MODE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnumDoNotCopy           GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum = "DO_NOT_COPY"
	GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnumAlwaysCopy          GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum = "ALWAYS_COPY"
	GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnumCopyAppliable       GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum = "COPY_APPLIABLE"
)

// GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy
// Behavior of this label when it's applied to Drive items.
type GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy struct {
	CopyMode *GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyModeEnum `json:"copyMode,omitempty"`
}
