package shared

type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum string

const (
	GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewBasic GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = "LABEL_VIEW_BASIC"
	GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnumLabelViewFull  GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum = "LABEL_VIEW_FULL"
)

// GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput
// The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied.
type GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestInput struct {
	LanguageCode   *string                                                          `json:"languageCode,omitempty"`
	Requests       []GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput `json:"requests,omitempty"`
	UseAdminAccess *bool                                                            `json:"useAdminAccess,omitempty"`
	View           *GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestViewEnum      `json:"view,omitempty"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl                         `json:"writeControl,omitempty"`
}
