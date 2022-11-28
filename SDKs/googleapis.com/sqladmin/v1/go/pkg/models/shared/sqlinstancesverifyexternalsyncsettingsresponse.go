package shared

// SQLInstancesVerifyExternalSyncSettingsResponse
// Instance verify external sync settings response.
type SQLInstancesVerifyExternalSyncSettingsResponse struct {
	Errors   []SQLExternalSyncSettingError `json:"errors,omitempty"`
	Kind     *string                       `json:"kind,omitempty"`
	Warnings []SQLExternalSyncSettingError `json:"warnings,omitempty"`
}
