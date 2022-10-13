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

type GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest struct {
	CopyMode       *GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestCopyModeEnum `json:"copyMode"`
	LanguageCode   *string                                                            `json:"languageCode"`
	UseAdminAccess *bool                                                              `json:"useAdminAccess"`
	View           *GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestViewEnum     `json:"view"`
}
