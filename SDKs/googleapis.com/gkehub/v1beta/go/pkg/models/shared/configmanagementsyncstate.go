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
	Code         *ConfigManagementSyncStateCodeEnum `json:"code,omitempty"`
	Errors       []ConfigManagementSyncError        `json:"errors,omitempty"`
	ImportToken  *string                            `json:"importToken,omitempty"`
	LastSync     *string                            `json:"lastSync,omitempty"`
	LastSyncTime *string                            `json:"lastSyncTime,omitempty"`
	SourceToken  *string                            `json:"sourceToken,omitempty"`
	SyncToken    *string                            `json:"syncToken,omitempty"`
}
