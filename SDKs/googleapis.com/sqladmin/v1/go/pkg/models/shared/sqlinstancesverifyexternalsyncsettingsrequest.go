package shared

type SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum string

const (
	SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumExternalSyncModeUnspecified SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
	SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumOnline                      SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = "ONLINE"
	SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumOffline                     SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = "OFFLINE"
)

// SQLInstancesVerifyExternalSyncSettingsRequest
// Instance verify external sync settings request.
type SQLInstancesVerifyExternalSyncSettingsRequest struct {
	MysqlSyncConfig       *MySQLSyncConfig                                           `json:"mysqlSyncConfig,omitempty"`
	SyncMode              *SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum `json:"syncMode,omitempty"`
	VerifyConnectionOnly  *bool                                                      `json:"verifyConnectionOnly,omitempty"`
	VerifyReplicationOnly *bool                                                      `json:"verifyReplicationOnly,omitempty"`
}
