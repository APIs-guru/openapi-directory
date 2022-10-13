package shared

type InputParameterDataTypeEnum string

const (
	InputParameterDataTypeEnumDataTypeUnspecified           InputParameterDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	InputParameterDataTypeEnumDataTypeInt                   InputParameterDataTypeEnum = "DATA_TYPE_INT"
	InputParameterDataTypeEnumDataTypeSmallint              InputParameterDataTypeEnum = "DATA_TYPE_SMALLINT"
	InputParameterDataTypeEnumDataTypeDouble                InputParameterDataTypeEnum = "DATA_TYPE_DOUBLE"
	InputParameterDataTypeEnumDataTypeDate                  InputParameterDataTypeEnum = "DATA_TYPE_DATE"
	InputParameterDataTypeEnumDataTypeDatetime              InputParameterDataTypeEnum = "DATA_TYPE_DATETIME"
	InputParameterDataTypeEnumDataTypeTime                  InputParameterDataTypeEnum = "DATA_TYPE_TIME"
	InputParameterDataTypeEnumDataTypeString                InputParameterDataTypeEnum = "DATA_TYPE_STRING"
	InputParameterDataTypeEnumDataTypeLong                  InputParameterDataTypeEnum = "DATA_TYPE_LONG"
	InputParameterDataTypeEnumDataTypeBoolean               InputParameterDataTypeEnum = "DATA_TYPE_BOOLEAN"
	InputParameterDataTypeEnumDataTypeDecimal               InputParameterDataTypeEnum = "DATA_TYPE_DECIMAL"
	InputParameterDataTypeEnumDataTypeUUID                  InputParameterDataTypeEnum = "DATA_TYPE_UUID"
	InputParameterDataTypeEnumDataTypeBlob                  InputParameterDataTypeEnum = "DATA_TYPE_BLOB"
	InputParameterDataTypeEnumDataTypeBit                   InputParameterDataTypeEnum = "DATA_TYPE_BIT"
	InputParameterDataTypeEnumDataTypeTinyint               InputParameterDataTypeEnum = "DATA_TYPE_TINYINT"
	InputParameterDataTypeEnumDataTypeInteger               InputParameterDataTypeEnum = "DATA_TYPE_INTEGER"
	InputParameterDataTypeEnumDataTypeBigint                InputParameterDataTypeEnum = "DATA_TYPE_BIGINT"
	InputParameterDataTypeEnumDataTypeFloat                 InputParameterDataTypeEnum = "DATA_TYPE_FLOAT"
	InputParameterDataTypeEnumDataTypeReal                  InputParameterDataTypeEnum = "DATA_TYPE_REAL"
	InputParameterDataTypeEnumDataTypeNumeric               InputParameterDataTypeEnum = "DATA_TYPE_NUMERIC"
	InputParameterDataTypeEnumDataTypeChar                  InputParameterDataTypeEnum = "DATA_TYPE_CHAR"
	InputParameterDataTypeEnumDataTypeVarchar               InputParameterDataTypeEnum = "DATA_TYPE_VARCHAR"
	InputParameterDataTypeEnumDataTypeLongvarchar           InputParameterDataTypeEnum = "DATA_TYPE_LONGVARCHAR"
	InputParameterDataTypeEnumDataTypeTimestamp             InputParameterDataTypeEnum = "DATA_TYPE_TIMESTAMP"
	InputParameterDataTypeEnumDataTypeNchar                 InputParameterDataTypeEnum = "DATA_TYPE_NCHAR"
	InputParameterDataTypeEnumDataTypeNvarchar              InputParameterDataTypeEnum = "DATA_TYPE_NVARCHAR"
	InputParameterDataTypeEnumDataTypeLongnvarchar          InputParameterDataTypeEnum = "DATA_TYPE_LONGNVARCHAR"
	InputParameterDataTypeEnumDataTypeNull                  InputParameterDataTypeEnum = "DATA_TYPE_NULL"
	InputParameterDataTypeEnumDataTypeOther                 InputParameterDataTypeEnum = "DATA_TYPE_OTHER"
	InputParameterDataTypeEnumDataTypeJavaObject            InputParameterDataTypeEnum = "DATA_TYPE_JAVA_OBJECT"
	InputParameterDataTypeEnumDataTypeDistinct              InputParameterDataTypeEnum = "DATA_TYPE_DISTINCT"
	InputParameterDataTypeEnumDataTypeStruct                InputParameterDataTypeEnum = "DATA_TYPE_STRUCT"
	InputParameterDataTypeEnumDataTypeArray                 InputParameterDataTypeEnum = "DATA_TYPE_ARRAY"
	InputParameterDataTypeEnumDataTypeClob                  InputParameterDataTypeEnum = "DATA_TYPE_CLOB"
	InputParameterDataTypeEnumDataTypeRef                   InputParameterDataTypeEnum = "DATA_TYPE_REF"
	InputParameterDataTypeEnumDataTypeDatalink              InputParameterDataTypeEnum = "DATA_TYPE_DATALINK"
	InputParameterDataTypeEnumDataTypeRowid                 InputParameterDataTypeEnum = "DATA_TYPE_ROWID"
	InputParameterDataTypeEnumDataTypeBinary                InputParameterDataTypeEnum = "DATA_TYPE_BINARY"
	InputParameterDataTypeEnumDataTypeVarbinary             InputParameterDataTypeEnum = "DATA_TYPE_VARBINARY"
	InputParameterDataTypeEnumDataTypeLongvarbinary         InputParameterDataTypeEnum = "DATA_TYPE_LONGVARBINARY"
	InputParameterDataTypeEnumDataTypeNclob                 InputParameterDataTypeEnum = "DATA_TYPE_NCLOB"
	InputParameterDataTypeEnumDataTypeSqlxml                InputParameterDataTypeEnum = "DATA_TYPE_SQLXML"
	InputParameterDataTypeEnumDataTypeRefCursor             InputParameterDataTypeEnum = "DATA_TYPE_REF_CURSOR"
	InputParameterDataTypeEnumDataTypeTimeWithTimezone      InputParameterDataTypeEnum = "DATA_TYPE_TIME_WITH_TIMEZONE"
	InputParameterDataTypeEnumDataTypeTimestampWithTimezone InputParameterDataTypeEnum = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
)

type InputParameter struct {
	DataType     *InputParameterDataTypeEnum `json:"dataType"`
	DefaultValue *interface{}                `json:"defaultValue"`
	Description  *string                     `json:"description"`
	Nullable     *bool                       `json:"nullable"`
	Parameter    *string                     `json:"parameter"`
}
