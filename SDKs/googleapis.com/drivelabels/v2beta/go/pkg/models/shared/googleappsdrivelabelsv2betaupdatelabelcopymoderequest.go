package shared

type GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum string

const (
	GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnumCopyModeUnspecified GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum = "COPY_MODE_UNSPECIFIED"
	GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnumDoNotCopy           GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum = "DO_NOT_COPY"
	GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnumAlwaysCopy          GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum = "ALWAYS_COPY"
	GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnumCopyAppliable       GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum = "COPY_APPLIABLE"
)

type GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum string

const (
	GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnumLabelViewBasic GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum = "LABEL_VIEW_BASIC"
	GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnumLabelViewFull  GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum = "LABEL_VIEW_FULL"
)

// GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest
// Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \
type GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest struct {
	CopyMode       *GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum `json:"copyMode,omitempty"`
	LanguageCode   *string                                                            `json:"languageCode,omitempty"`
	UseAdminAccess *bool                                                              `json:"useAdminAccess,omitempty"`
	View           *GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum     `json:"view,omitempty"`
}
