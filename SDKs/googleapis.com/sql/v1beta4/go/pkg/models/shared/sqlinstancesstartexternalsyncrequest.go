package shared

type SQLInstancesStartExternalSyncRequestSyncModeEnum string

const (
	SQLInstancesStartExternalSyncRequestSyncModeEnumExternalSyncModeUnspecified SQLInstancesStartExternalSyncRequestSyncModeEnum = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
	SQLInstancesStartExternalSyncRequestSyncModeEnumOnline                      SQLInstancesStartExternalSyncRequestSyncModeEnum = "ONLINE"
	SQLInstancesStartExternalSyncRequestSyncModeEnumOffline                     SQLInstancesStartExternalSyncRequestSyncModeEnum = "OFFLINE"
)

type SQLInstancesStartExternalSyncRequest struct {
	MysqlSyncConfig  *MySQLSyncConfig                                  `json:"mysqlSyncConfig"`
	SkipVerification *bool                                             `json:"skipVerification"`
	SyncMode         *SQLInstancesStartExternalSyncRequestSyncModeEnum `json:"syncMode"`
}
