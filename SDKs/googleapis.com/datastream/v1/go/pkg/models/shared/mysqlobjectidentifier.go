package shared



type MysqlObjectIdentifier struct {
    Database *string `json:"database,omitempty"`
    Table *string `json:"table,omitempty"`
    
}

