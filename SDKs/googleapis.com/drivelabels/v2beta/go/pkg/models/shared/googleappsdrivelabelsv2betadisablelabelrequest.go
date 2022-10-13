package shared

type GoogleAppsDriveLabelsV2betaDisableLabelRequest struct {
	DisabledPolicy *GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy `json:"disabledPolicy"`
	LanguageCode   *string                                             `json:"languageCode"`
	UpdateMask     *string                                             `json:"updateMask"`
	UseAdminAccess *bool                                               `json:"useAdminAccess"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl            `json:"writeControl"`
}
