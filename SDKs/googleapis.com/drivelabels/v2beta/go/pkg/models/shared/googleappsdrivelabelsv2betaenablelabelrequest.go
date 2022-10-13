package shared

type GoogleAppsDriveLabelsV2betaEnableLabelRequest struct {
	LanguageCode   *string                                  `json:"languageCode"`
	UseAdminAccess *bool                                    `json:"useAdminAccess"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl `json:"writeControl"`
}
