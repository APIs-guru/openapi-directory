package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum string

const (
	GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewBasic GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = "LABEL_VIEW_BASIC"
	GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewFull  GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = "LABEL_VIEW_FULL"
)

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest struct {
	LanguageCode   *string                                                     `json:"languageCode,omitempty"`
	Requests       []GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest `json:"requests,omitempty"`
	UseAdminAccess *bool                                                       `json:"useAdminAccess,omitempty"`
	View           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum `json:"view,omitempty"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl                    `json:"writeControl,omitempty"`
}
