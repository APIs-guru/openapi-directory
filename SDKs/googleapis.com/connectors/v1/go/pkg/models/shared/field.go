package shared




type FieldDataTypeEnum string

const (
    FieldDataTypeEnumDataTypeUnspecified FieldDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
FieldDataTypeEnumDataTypeInt FieldDataTypeEnum = "DATA_TYPE_INT"
FieldDataTypeEnumDataTypeSmallint FieldDataTypeEnum = "DATA_TYPE_SMALLINT"
FieldDataTypeEnumDataTypeDouble FieldDataTypeEnum = "DATA_TYPE_DOUBLE"
FieldDataTypeEnumDataTypeDate FieldDataTypeEnum = "DATA_TYPE_DATE"
FieldDataTypeEnumDataTypeDatetime FieldDataTypeEnum = "DATA_TYPE_DATETIME"
FieldDataTypeEnumDataTypeTime FieldDataTypeEnum = "DATA_TYPE_TIME"
FieldDataTypeEnumDataTypeString FieldDataTypeEnum = "DATA_TYPE_STRING"
FieldDataTypeEnumDataTypeLong FieldDataTypeEnum = "DATA_TYPE_LONG"
FieldDataTypeEnumDataTypeBoolean FieldDataTypeEnum = "DATA_TYPE_BOOLEAN"
FieldDataTypeEnumDataTypeDecimal FieldDataTypeEnum = "DATA_TYPE_DECIMAL"
FieldDataTypeEnumDataTypeUUID FieldDataTypeEnum = "DATA_TYPE_UUID"
FieldDataTypeEnumDataTypeBlob FieldDataTypeEnum = "DATA_TYPE_BLOB"
FieldDataTypeEnumDataTypeBit FieldDataTypeEnum = "DATA_TYPE_BIT"
FieldDataTypeEnumDataTypeTinyint FieldDataTypeEnum = "DATA_TYPE_TINYINT"
FieldDataTypeEnumDataTypeInteger FieldDataTypeEnum = "DATA_TYPE_INTEGER"
FieldDataTypeEnumDataTypeBigint FieldDataTypeEnum = "DATA_TYPE_BIGINT"
FieldDataTypeEnumDataTypeFloat FieldDataTypeEnum = "DATA_TYPE_FLOAT"
FieldDataTypeEnumDataTypeReal FieldDataTypeEnum = "DATA_TYPE_REAL"
FieldDataTypeEnumDataTypeNumeric FieldDataTypeEnum = "DATA_TYPE_NUMERIC"
FieldDataTypeEnumDataTypeChar FieldDataTypeEnum = "DATA_TYPE_CHAR"
FieldDataTypeEnumDataTypeVarchar FieldDataTypeEnum = "DATA_TYPE_VARCHAR"
FieldDataTypeEnumDataTypeLongvarchar FieldDataTypeEnum = "DATA_TYPE_LONGVARCHAR"
FieldDataTypeEnumDataTypeTimestamp FieldDataTypeEnum = "DATA_TYPE_TIMESTAMP"
FieldDataTypeEnumDataTypeNchar FieldDataTypeEnum = "DATA_TYPE_NCHAR"
FieldDataTypeEnumDataTypeNvarchar FieldDataTypeEnum = "DATA_TYPE_NVARCHAR"
FieldDataTypeEnumDataTypeLongnvarchar FieldDataTypeEnum = "DATA_TYPE_LONGNVARCHAR"
FieldDataTypeEnumDataTypeNull FieldDataTypeEnum = "DATA_TYPE_NULL"
FieldDataTypeEnumDataTypeOther FieldDataTypeEnum = "DATA_TYPE_OTHER"
FieldDataTypeEnumDataTypeJavaObject FieldDataTypeEnum = "DATA_TYPE_JAVA_OBJECT"
FieldDataTypeEnumDataTypeDistinct FieldDataTypeEnum = "DATA_TYPE_DISTINCT"
FieldDataTypeEnumDataTypeStruct FieldDataTypeEnum = "DATA_TYPE_STRUCT"
FieldDataTypeEnumDataTypeArray FieldDataTypeEnum = "DATA_TYPE_ARRAY"
FieldDataTypeEnumDataTypeClob FieldDataTypeEnum = "DATA_TYPE_CLOB"
FieldDataTypeEnumDataTypeRef FieldDataTypeEnum = "DATA_TYPE_REF"
FieldDataTypeEnumDataTypeDatalink FieldDataTypeEnum = "DATA_TYPE_DATALINK"
FieldDataTypeEnumDataTypeRowid FieldDataTypeEnum = "DATA_TYPE_ROWID"
FieldDataTypeEnumDataTypeBinary FieldDataTypeEnum = "DATA_TYPE_BINARY"
FieldDataTypeEnumDataTypeVarbinary FieldDataTypeEnum = "DATA_TYPE_VARBINARY"
FieldDataTypeEnumDataTypeLongvarbinary FieldDataTypeEnum = "DATA_TYPE_LONGVARBINARY"
FieldDataTypeEnumDataTypeNclob FieldDataTypeEnum = "DATA_TYPE_NCLOB"
FieldDataTypeEnumDataTypeSqlxml FieldDataTypeEnum = "DATA_TYPE_SQLXML"
FieldDataTypeEnumDataTypeRefCursor FieldDataTypeEnum = "DATA_TYPE_REF_CURSOR"
FieldDataTypeEnumDataTypeTimeWithTimezone FieldDataTypeEnum = "DATA_TYPE_TIME_WITH_TIMEZONE"
FieldDataTypeEnumDataTypeTimestampWithTimezone FieldDataTypeEnum = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
)


type Field struct {
    AdditionalDetails map[string]interface{} `json:"additionalDetails,omitempty"`
    DataType *FieldDataTypeEnum `json:"dataType,omitempty"`
    DefaultValue *interface{} `json:"defaultValue,omitempty"`
    Description *string `json:"description,omitempty"`
    Field *string `json:"field,omitempty"`
    Key *bool `json:"key,omitempty"`
    Nullable *bool `json:"nullable,omitempty"`
    Readonly *bool `json:"readonly,omitempty"`
    
}

