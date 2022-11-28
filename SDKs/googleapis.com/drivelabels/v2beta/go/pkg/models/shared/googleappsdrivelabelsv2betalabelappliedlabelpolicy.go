package shared

type GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum string

const (
	GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnumCopyModeUnspecified GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum = "COPY_MODE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnumDoNotCopy           GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum = "DO_NOT_COPY"
	GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnumAlwaysCopy          GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum = "ALWAYS_COPY"
	GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnumCopyAppliable       GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum = "COPY_APPLIABLE"
)

// GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy
// Behavior of this label when it's applied to Drive items.
type GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy struct {
	CopyMode *GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyModeEnum `json:"copyMode,omitempty"`
}
