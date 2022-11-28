package shared

type SQLInstancesStartExternalSyncRequestSyncModeEnum string

const (
	SQLInstancesStartExternalSyncRequestSyncModeEnumExternalSyncModeUnspecified SQLInstancesStartExternalSyncRequestSyncModeEnum = "EXTERNAL_SYNC_MODE_UNSPECIFIED"
	SQLInstancesStartExternalSyncRequestSyncModeEnumOnline                      SQLInstancesStartExternalSyncRequestSyncModeEnum = "ONLINE"
	SQLInstancesStartExternalSyncRequestSyncModeEnumOffline                     SQLInstancesStartExternalSyncRequestSyncModeEnum = "OFFLINE"
)

// SQLInstancesStartExternalSyncRequest
// Instance start external sync request.
type SQLInstancesStartExternalSyncRequest struct {
	MysqlSyncConfig  *MySQLSyncConfig                                  `json:"mysqlSyncConfig,omitempty"`
	SkipVerification *bool                                             `json:"skipVerification,omitempty"`
	SyncMode         *SQLInstancesStartExternalSyncRequestSyncModeEnum `json:"syncMode,omitempty"`
}
