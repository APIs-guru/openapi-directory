package shared




type InputParameterDataTypeEnum string

const (
    InputParameterDataTypeEnumDataTypeUnspecified InputParameterDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
InputParameterDataTypeEnumInt InputParameterDataTypeEnum = "INT"
InputParameterDataTypeEnumSmallint InputParameterDataTypeEnum = "SMALLINT"
InputParameterDataTypeEnumDouble InputParameterDataTypeEnum = "DOUBLE"
InputParameterDataTypeEnumDate InputParameterDataTypeEnum = "DATE"
InputParameterDataTypeEnumDatetime InputParameterDataTypeEnum = "DATETIME"
InputParameterDataTypeEnumTime InputParameterDataTypeEnum = "TIME"
InputParameterDataTypeEnumString InputParameterDataTypeEnum = "STRING"
InputParameterDataTypeEnumLong InputParameterDataTypeEnum = "LONG"
InputParameterDataTypeEnumBoolean InputParameterDataTypeEnum = "BOOLEAN"
InputParameterDataTypeEnumDecimal InputParameterDataTypeEnum = "DECIMAL"
InputParameterDataTypeEnumUUID InputParameterDataTypeEnum = "UUID"
InputParameterDataTypeEnumBlob InputParameterDataTypeEnum = "BLOB"
InputParameterDataTypeEnumBit InputParameterDataTypeEnum = "BIT"
InputParameterDataTypeEnumTinyint InputParameterDataTypeEnum = "TINYINT"
InputParameterDataTypeEnumInteger InputParameterDataTypeEnum = "INTEGER"
InputParameterDataTypeEnumBigint InputParameterDataTypeEnum = "BIGINT"
InputParameterDataTypeEnumFloat InputParameterDataTypeEnum = "FLOAT"
InputParameterDataTypeEnumReal InputParameterDataTypeEnum = "REAL"
InputParameterDataTypeEnumNumeric InputParameterDataTypeEnum = "NUMERIC"
InputParameterDataTypeEnumChar InputParameterDataTypeEnum = "CHAR"
InputParameterDataTypeEnumVarchar InputParameterDataTypeEnum = "VARCHAR"
InputParameterDataTypeEnumLongvarchar InputParameterDataTypeEnum = "LONGVARCHAR"
InputParameterDataTypeEnumTimestamp InputParameterDataTypeEnum = "TIMESTAMP"
InputParameterDataTypeEnumNchar InputParameterDataTypeEnum = "NCHAR"
InputParameterDataTypeEnumNvarchar InputParameterDataTypeEnum = "NVARCHAR"
InputParameterDataTypeEnumLongnvarchar InputParameterDataTypeEnum = "LONGNVARCHAR"
InputParameterDataTypeEnumNull InputParameterDataTypeEnum = "NULL"
InputParameterDataTypeEnumOther InputParameterDataTypeEnum = "OTHER"
InputParameterDataTypeEnumJavaObject InputParameterDataTypeEnum = "JAVA_OBJECT"
InputParameterDataTypeEnumDistinct InputParameterDataTypeEnum = "DISTINCT"
InputParameterDataTypeEnumStruct InputParameterDataTypeEnum = "STRUCT"
InputParameterDataTypeEnumArray InputParameterDataTypeEnum = "ARRAY"
InputParameterDataTypeEnumClob InputParameterDataTypeEnum = "CLOB"
InputParameterDataTypeEnumRef InputParameterDataTypeEnum = "REF"
InputParameterDataTypeEnumDatalink InputParameterDataTypeEnum = "DATALINK"
InputParameterDataTypeEnumRowid InputParameterDataTypeEnum = "ROWID"
InputParameterDataTypeEnumBinary InputParameterDataTypeEnum = "BINARY"
InputParameterDataTypeEnumVarbinary InputParameterDataTypeEnum = "VARBINARY"
InputParameterDataTypeEnumLongvarbinary InputParameterDataTypeEnum = "LONGVARBINARY"
InputParameterDataTypeEnumNclob InputParameterDataTypeEnum = "NCLOB"
InputParameterDataTypeEnumSqlxml InputParameterDataTypeEnum = "SQLXML"
InputParameterDataTypeEnumRefCursor InputParameterDataTypeEnum = "REF_CURSOR"
InputParameterDataTypeEnumTimeWithTimezone InputParameterDataTypeEnum = "TIME_WITH_TIMEZONE"
InputParameterDataTypeEnumTimestampWithTimezone InputParameterDataTypeEnum = "TIMESTAMP_WITH_TIMEZONE"
)


type InputParameter struct {
    DataType *InputParameterDataTypeEnum `json:"dataType,omitempty"`
    DefaultValue *interface{} `json:"defaultValue,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Nullable *bool `json:"nullable,omitempty"`
    
}

