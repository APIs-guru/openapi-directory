package shared

type SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum string

const (
	SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumExternalSyncModeUnspecified SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
	SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumOnline                      SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = "ONLINE"
	SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnumOffline                     SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum = "OFFLINE"
)

type SQLInstancesVerifyExternalSyncSettingsRequest struct {
	MysqlSyncConfig       *MySQLSyncConfig                                           `json:"mysqlSyncConfig"`
	SyncMode              *SQLInstancesVerifyExternalSyncSettingsRequestSyncModeEnum `json:"syncMode"`
	VerifyConnectionOnly  *bool                                                      `json:"verifyConnectionOnly"`
	VerifyReplicationOnly *bool                                                      `json:"verifyReplicationOnly"`
}
