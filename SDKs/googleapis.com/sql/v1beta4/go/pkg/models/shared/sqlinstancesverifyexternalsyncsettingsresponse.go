package shared

type SQLInstancesVerifyExternalSyncSettingsResponse struct {
	Errors   []SQLExternalSyncSettingError `json:"errors,omitempty"`
	Kind     *string                       `json:"kind,omitempty"`
	Warnings []SQLExternalSyncSettingError `json:"warnings,omitempty"`
}
