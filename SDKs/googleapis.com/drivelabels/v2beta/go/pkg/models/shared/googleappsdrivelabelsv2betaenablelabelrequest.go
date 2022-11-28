package shared

// GoogleAppsDriveLabelsV2betaEnableLabelRequest
// Request to enable a label.
type GoogleAppsDriveLabelsV2betaEnableLabelRequest struct {
	LanguageCode   *string                                  `json:"languageCode,omitempty"`
	UseAdminAccess *bool                                    `json:"useAdminAccess,omitempty"`
	WriteControl   *GoogleAppsDriveLabelsV2betaWriteControl `json:"writeControl,omitempty"`
}
