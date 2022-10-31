package shared




type ResultMetadataDataTypeEnum string

const (
    ResultMetadataDataTypeEnumDataTypeUnspecified ResultMetadataDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
ResultMetadataDataTypeEnumInt ResultMetadataDataTypeEnum = "INT"
ResultMetadataDataTypeEnumSmallint ResultMetadataDataTypeEnum = "SMALLINT"
ResultMetadataDataTypeEnumDouble ResultMetadataDataTypeEnum = "DOUBLE"
ResultMetadataDataTypeEnumDate ResultMetadataDataTypeEnum = "DATE"
ResultMetadataDataTypeEnumDatetime ResultMetadataDataTypeEnum = "DATETIME"
ResultMetadataDataTypeEnumTime ResultMetadataDataTypeEnum = "TIME"
ResultMetadataDataTypeEnumString ResultMetadataDataTypeEnum = "STRING"
ResultMetadataDataTypeEnumLong ResultMetadataDataTypeEnum = "LONG"
ResultMetadataDataTypeEnumBoolean ResultMetadataDataTypeEnum = "BOOLEAN"
ResultMetadataDataTypeEnumDecimal ResultMetadataDataTypeEnum = "DECIMAL"
ResultMetadataDataTypeEnumUUID ResultMetadataDataTypeEnum = "UUID"
ResultMetadataDataTypeEnumBlob ResultMetadataDataTypeEnum = "BLOB"
ResultMetadataDataTypeEnumBit ResultMetadataDataTypeEnum = "BIT"
ResultMetadataDataTypeEnumTinyint ResultMetadataDataTypeEnum = "TINYINT"
ResultMetadataDataTypeEnumInteger ResultMetadataDataTypeEnum = "INTEGER"
ResultMetadataDataTypeEnumBigint ResultMetadataDataTypeEnum = "BIGINT"
ResultMetadataDataTypeEnumFloat ResultMetadataDataTypeEnum = "FLOAT"
ResultMetadataDataTypeEnumReal ResultMetadataDataTypeEnum = "REAL"
ResultMetadataDataTypeEnumNumeric ResultMetadataDataTypeEnum = "NUMERIC"
ResultMetadataDataTypeEnumChar ResultMetadataDataTypeEnum = "CHAR"
ResultMetadataDataTypeEnumVarchar ResultMetadataDataTypeEnum = "VARCHAR"
ResultMetadataDataTypeEnumLongvarchar ResultMetadataDataTypeEnum = "LONGVARCHAR"
ResultMetadataDataTypeEnumTimestamp ResultMetadataDataTypeEnum = "TIMESTAMP"
ResultMetadataDataTypeEnumNchar ResultMetadataDataTypeEnum = "NCHAR"
ResultMetadataDataTypeEnumNvarchar ResultMetadataDataTypeEnum = "NVARCHAR"
ResultMetadataDataTypeEnumLongnvarchar ResultMetadataDataTypeEnum = "LONGNVARCHAR"
ResultMetadataDataTypeEnumNull ResultMetadataDataTypeEnum = "NULL"
ResultMetadataDataTypeEnumOther ResultMetadataDataTypeEnum = "OTHER"
ResultMetadataDataTypeEnumJavaObject ResultMetadataDataTypeEnum = "JAVA_OBJECT"
ResultMetadataDataTypeEnumDistinct ResultMetadataDataTypeEnum = "DISTINCT"
ResultMetadataDataTypeEnumStruct ResultMetadataDataTypeEnum = "STRUCT"
ResultMetadataDataTypeEnumArray ResultMetadataDataTypeEnum = "ARRAY"
ResultMetadataDataTypeEnumClob ResultMetadataDataTypeEnum = "CLOB"
ResultMetadataDataTypeEnumRef ResultMetadataDataTypeEnum = "REF"
ResultMetadataDataTypeEnumDatalink ResultMetadataDataTypeEnum = "DATALINK"
ResultMetadataDataTypeEnumRowid ResultMetadataDataTypeEnum = "ROWID"
ResultMetadataDataTypeEnumBinary ResultMetadataDataTypeEnum = "BINARY"
ResultMetadataDataTypeEnumVarbinary ResultMetadataDataTypeEnum = "VARBINARY"
ResultMetadataDataTypeEnumLongvarbinary ResultMetadataDataTypeEnum = "LONGVARBINARY"
ResultMetadataDataTypeEnumNclob ResultMetadataDataTypeEnum = "NCLOB"
ResultMetadataDataTypeEnumSqlxml ResultMetadataDataTypeEnum = "SQLXML"
ResultMetadataDataTypeEnumRefCursor ResultMetadataDataTypeEnum = "REF_CURSOR"
ResultMetadataDataTypeEnumTimeWithTimezone ResultMetadataDataTypeEnum = "TIME_WITH_TIMEZONE"
ResultMetadataDataTypeEnumTimestampWithTimezone ResultMetadataDataTypeEnum = "TIMESTAMP_WITH_TIMEZONE"
)


type ResultMetadata struct {
    DataType *ResultMetadataDataTypeEnum `json:"dataType,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

