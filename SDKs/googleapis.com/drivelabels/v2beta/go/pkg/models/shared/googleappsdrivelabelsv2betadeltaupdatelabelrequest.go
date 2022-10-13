package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum string

const (
	GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewBasic GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = "LABEL_VIEW_BASIC"
	GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewFull  GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = "LABEL_VIEW_FULL"
)

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest struct {
	LanguageCode   *string                                                     `json:"languageCode"`
	Requests       []GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest `json:"requests"`
	UseAdminAccess *bool                                                       `json:"useAdminAccess"`
	View           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum `json:"view"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl                    `json:"writeControl"`
}
