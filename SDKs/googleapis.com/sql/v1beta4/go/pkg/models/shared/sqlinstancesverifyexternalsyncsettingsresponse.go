package shared

type SQLInstancesVerifyExternalSyncSettingsResponse struct {
	Errors   []SQLExternalSyncSettingError `json:"errors"`
	Kind     *string                       `json:"kind"`
	Warnings []SQLExternalSyncSettingError `json:"warnings"`
}
