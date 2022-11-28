package shared

// MySQLSyncConfig
// MySQL-specific external server sync settings.
type MySQLSyncConfig struct {
	InitialSyncFlags []SyncFlags `json:"initialSyncFlags,omitempty"`
}
