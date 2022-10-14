package shared

type GoogleAppsDriveLabelsV2betaPublishLabelRequest struct {
	LanguageCode   *string                                  `json:"languageCode,omitempty"`
	UseAdminAccess *bool                                    `json:"useAdminAccess,omitempty"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl `json:"writeControl,omitempty"`
}
