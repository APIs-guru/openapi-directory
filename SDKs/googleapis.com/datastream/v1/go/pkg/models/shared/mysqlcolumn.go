package shared



type MysqlColumn struct {
    Collation *string `json:"collation,omitempty"`
    Column *string `json:"column,omitempty"`
    DataType *string `json:"dataType,omitempty"`
    Length *int32 `json:"length,omitempty"`
    Nullable *bool `json:"nullable,omitempty"`
    OrdinalPosition *int32 `json:"ordinalPosition,omitempty"`
    PrimaryKey *bool `json:"primaryKey,omitempty"`
    
}

