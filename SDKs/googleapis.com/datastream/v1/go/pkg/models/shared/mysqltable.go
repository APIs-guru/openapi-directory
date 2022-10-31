package shared



type MysqlTable struct {
    MysqlColumns []MysqlColumn `json:"mysqlColumns,omitempty"`
    Table *string `json:"table,omitempty"`
    
}

