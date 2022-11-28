package shared

// MysqlObjectIdentifier
// Mysql data source object identifier.
type MysqlObjectIdentifier struct {
	Database *string `json:"database,omitempty"`
	Table    *string `json:"table,omitempty"`
}
