package shared

type MySQLSyncConfig struct {
	InitialSyncFlags []SyncFlags `json:"initialSyncFlags"`
}
