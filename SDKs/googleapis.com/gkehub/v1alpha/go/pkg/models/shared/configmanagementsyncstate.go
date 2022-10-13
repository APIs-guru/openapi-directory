package shared

type ConfigManagementSyncStateCodeEnum string

const (
	ConfigManagementSyncStateCodeEnumSyncCodeUnspecified ConfigManagementSyncStateCodeEnum = "SYNC_CODE_UNSPECIFIED"
	ConfigManagementSyncStateCodeEnumSynced              ConfigManagementSyncStateCodeEnum = "SYNCED"
	ConfigManagementSyncStateCodeEnumPending             ConfigManagementSyncStateCodeEnum = "PENDING"
	ConfigManagementSyncStateCodeEnumError               ConfigManagementSyncStateCodeEnum = "ERROR"
	ConfigManagementSyncStateCodeEnumNotConfigured       ConfigManagementSyncStateCodeEnum = "NOT_CONFIGURED"
	ConfigManagementSyncStateCodeEnumNotInstalled        ConfigManagementSyncStateCodeEnum = "NOT_INSTALLED"
	ConfigManagementSyncStateCodeEnumUnauthorized        ConfigManagementSyncStateCodeEnum = "UNAUTHORIZED"
	ConfigManagementSyncStateCodeEnumUnreachable         ConfigManagementSyncStateCodeEnum = "UNREACHABLE"
)

type ConfigManagementSyncState struct {
	Code         *ConfigManagementSyncStateCodeEnum `json:"code"`
	Errors       []ConfigManagementSyncError        `json:"errors"`
	ImportToken  *string                            `json:"importToken"`
	LastSync     *string                            `json:"lastSync"`
	LastSyncTime *string                            `json:"lastSyncTime"`
	SourceToken  *string                            `json:"sourceToken"`
	SyncToken    *string                            `json:"syncToken"`
}
