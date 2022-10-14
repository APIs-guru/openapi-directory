package shared

type ResultMetadataDataTypeEnum string

const (
	ResultMetadataDataTypeEnumDataTypeUnspecified           ResultMetadataDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	ResultMetadataDataTypeEnumDataTypeInt                   ResultMetadataDataTypeEnum = "DATA_TYPE_INT"
	ResultMetadataDataTypeEnumDataTypeSmallint              ResultMetadataDataTypeEnum = "DATA_TYPE_SMALLINT"
	ResultMetadataDataTypeEnumDataTypeDouble                ResultMetadataDataTypeEnum = "DATA_TYPE_DOUBLE"
	ResultMetadataDataTypeEnumDataTypeDate                  ResultMetadataDataTypeEnum = "DATA_TYPE_DATE"
	ResultMetadataDataTypeEnumDataTypeDatetime              ResultMetadataDataTypeEnum = "DATA_TYPE_DATETIME"
	ResultMetadataDataTypeEnumDataTypeTime                  ResultMetadataDataTypeEnum = "DATA_TYPE_TIME"
	ResultMetadataDataTypeEnumDataTypeString                ResultMetadataDataTypeEnum = "DATA_TYPE_STRING"
	ResultMetadataDataTypeEnumDataTypeLong                  ResultMetadataDataTypeEnum = "DATA_TYPE_LONG"
	ResultMetadataDataTypeEnumDataTypeBoolean               ResultMetadataDataTypeEnum = "DATA_TYPE_BOOLEAN"
	ResultMetadataDataTypeEnumDataTypeDecimal               ResultMetadataDataTypeEnum = "DATA_TYPE_DECIMAL"
	ResultMetadataDataTypeEnumDataTypeUUID                  ResultMetadataDataTypeEnum = "DATA_TYPE_UUID"
	ResultMetadataDataTypeEnumDataTypeBlob                  ResultMetadataDataTypeEnum = "DATA_TYPE_BLOB"
	ResultMetadataDataTypeEnumDataTypeBit                   ResultMetadataDataTypeEnum = "DATA_TYPE_BIT"
	ResultMetadataDataTypeEnumDataTypeTinyint               ResultMetadataDataTypeEnum = "DATA_TYPE_TINYINT"
	ResultMetadataDataTypeEnumDataTypeInteger               ResultMetadataDataTypeEnum = "DATA_TYPE_INTEGER"
	ResultMetadataDataTypeEnumDataTypeBigint                ResultMetadataDataTypeEnum = "DATA_TYPE_BIGINT"
	ResultMetadataDataTypeEnumDataTypeFloat                 ResultMetadataDataTypeEnum = "DATA_TYPE_FLOAT"
	ResultMetadataDataTypeEnumDataTypeReal                  ResultMetadataDataTypeEnum = "DATA_TYPE_REAL"
	ResultMetadataDataTypeEnumDataTypeNumeric               ResultMetadataDataTypeEnum = "DATA_TYPE_NUMERIC"
	ResultMetadataDataTypeEnumDataTypeChar                  ResultMetadataDataTypeEnum = "DATA_TYPE_CHAR"
	ResultMetadataDataTypeEnumDataTypeVarchar               ResultMetadataDataTypeEnum = "DATA_TYPE_VARCHAR"
	ResultMetadataDataTypeEnumDataTypeLongvarchar           ResultMetadataDataTypeEnum = "DATA_TYPE_LONGVARCHAR"
	ResultMetadataDataTypeEnumDataTypeTimestamp             ResultMetadataDataTypeEnum = "DATA_TYPE_TIMESTAMP"
	ResultMetadataDataTypeEnumDataTypeNchar                 ResultMetadataDataTypeEnum = "DATA_TYPE_NCHAR"
	ResultMetadataDataTypeEnumDataTypeNvarchar              ResultMetadataDataTypeEnum = "DATA_TYPE_NVARCHAR"
	ResultMetadataDataTypeEnumDataTypeLongnvarchar          ResultMetadataDataTypeEnum = "DATA_TYPE_LONGNVARCHAR"
	ResultMetadataDataTypeEnumDataTypeNull                  ResultMetadataDataTypeEnum = "DATA_TYPE_NULL"
	ResultMetadataDataTypeEnumDataTypeOther                 ResultMetadataDataTypeEnum = "DATA_TYPE_OTHER"
	ResultMetadataDataTypeEnumDataTypeJavaObject            ResultMetadataDataTypeEnum = "DATA_TYPE_JAVA_OBJECT"
	ResultMetadataDataTypeEnumDataTypeDistinct              ResultMetadataDataTypeEnum = "DATA_TYPE_DISTINCT"
	ResultMetadataDataTypeEnumDataTypeStruct                ResultMetadataDataTypeEnum = "DATA_TYPE_STRUCT"
	ResultMetadataDataTypeEnumDataTypeArray                 ResultMetadataDataTypeEnum = "DATA_TYPE_ARRAY"
	ResultMetadataDataTypeEnumDataTypeClob                  ResultMetadataDataTypeEnum = "DATA_TYPE_CLOB"
	ResultMetadataDataTypeEnumDataTypeRef                   ResultMetadataDataTypeEnum = "DATA_TYPE_REF"
	ResultMetadataDataTypeEnumDataTypeDatalink              ResultMetadataDataTypeEnum = "DATA_TYPE_DATALINK"
	ResultMetadataDataTypeEnumDataTypeRowid                 ResultMetadataDataTypeEnum = "DATA_TYPE_ROWID"
	ResultMetadataDataTypeEnumDataTypeBinary                ResultMetadataDataTypeEnum = "DATA_TYPE_BINARY"
	ResultMetadataDataTypeEnumDataTypeVarbinary             ResultMetadataDataTypeEnum = "DATA_TYPE_VARBINARY"
	ResultMetadataDataTypeEnumDataTypeLongvarbinary         ResultMetadataDataTypeEnum = "DATA_TYPE_LONGVARBINARY"
	ResultMetadataDataTypeEnumDataTypeNclob                 ResultMetadataDataTypeEnum = "DATA_TYPE_NCLOB"
	ResultMetadataDataTypeEnumDataTypeSqlxml                ResultMetadataDataTypeEnum = "DATA_TYPE_SQLXML"
	ResultMetadataDataTypeEnumDataTypeRefCursor             ResultMetadataDataTypeEnum = "DATA_TYPE_REF_CURSOR"
	ResultMetadataDataTypeEnumDataTypeTimeWithTimezone      ResultMetadataDataTypeEnum = "DATA_TYPE_TIME_WITH_TIMEZONE"
	ResultMetadataDataTypeEnumDataTypeTimestampWithTimezone ResultMetadataDataTypeEnum = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
)

type ResultMetadata struct {
	DataType    *ResultMetadataDataTypeEnum `json:"dataType,omitempty"`
	Description *string                     `json:"description,omitempty"`
	Field       *string                     `json:"field,omitempty"`
}
