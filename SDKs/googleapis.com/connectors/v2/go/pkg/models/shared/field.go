package shared

type FieldDataTypeEnum string

const (
	FieldDataTypeEnumDataTypeUnspecified   FieldDataTypeEnum = "DATA_TYPE_UNSPECIFIED"
	FieldDataTypeEnumInt                   FieldDataTypeEnum = "INT"
	FieldDataTypeEnumSmallint              FieldDataTypeEnum = "SMALLINT"
	FieldDataTypeEnumDouble                FieldDataTypeEnum = "DOUBLE"
	FieldDataTypeEnumDate                  FieldDataTypeEnum = "DATE"
	FieldDataTypeEnumDatetime              FieldDataTypeEnum = "DATETIME"
	FieldDataTypeEnumTime                  FieldDataTypeEnum = "TIME"
	FieldDataTypeEnumString                FieldDataTypeEnum = "STRING"
	FieldDataTypeEnumLong                  FieldDataTypeEnum = "LONG"
	FieldDataTypeEnumBoolean               FieldDataTypeEnum = "BOOLEAN"
	FieldDataTypeEnumDecimal               FieldDataTypeEnum = "DECIMAL"
	FieldDataTypeEnumUUID                  FieldDataTypeEnum = "UUID"
	FieldDataTypeEnumBlob                  FieldDataTypeEnum = "BLOB"
	FieldDataTypeEnumBit                   FieldDataTypeEnum = "BIT"
	FieldDataTypeEnumTinyint               FieldDataTypeEnum = "TINYINT"
	FieldDataTypeEnumInteger               FieldDataTypeEnum = "INTEGER"
	FieldDataTypeEnumBigint                FieldDataTypeEnum = "BIGINT"
	FieldDataTypeEnumFloat                 FieldDataTypeEnum = "FLOAT"
	FieldDataTypeEnumReal                  FieldDataTypeEnum = "REAL"
	FieldDataTypeEnumNumeric               FieldDataTypeEnum = "NUMERIC"
	FieldDataTypeEnumChar                  FieldDataTypeEnum = "CHAR"
	FieldDataTypeEnumVarchar               FieldDataTypeEnum = "VARCHAR"
	FieldDataTypeEnumLongvarchar           FieldDataTypeEnum = "LONGVARCHAR"
	FieldDataTypeEnumTimestamp             FieldDataTypeEnum = "TIMESTAMP"
	FieldDataTypeEnumNchar                 FieldDataTypeEnum = "NCHAR"
	FieldDataTypeEnumNvarchar              FieldDataTypeEnum = "NVARCHAR"
	FieldDataTypeEnumLongnvarchar          FieldDataTypeEnum = "LONGNVARCHAR"
	FieldDataTypeEnumNull                  FieldDataTypeEnum = "NULL"
	FieldDataTypeEnumOther                 FieldDataTypeEnum = "OTHER"
	FieldDataTypeEnumJavaObject            FieldDataTypeEnum = "JAVA_OBJECT"
	FieldDataTypeEnumDistinct              FieldDataTypeEnum = "DISTINCT"
	FieldDataTypeEnumStruct                FieldDataTypeEnum = "STRUCT"
	FieldDataTypeEnumArray                 FieldDataTypeEnum = "ARRAY"
	FieldDataTypeEnumClob                  FieldDataTypeEnum = "CLOB"
	FieldDataTypeEnumRef                   FieldDataTypeEnum = "REF"
	FieldDataTypeEnumDatalink              FieldDataTypeEnum = "DATALINK"
	FieldDataTypeEnumRowid                 FieldDataTypeEnum = "ROWID"
	FieldDataTypeEnumBinary                FieldDataTypeEnum = "BINARY"
	FieldDataTypeEnumVarbinary             FieldDataTypeEnum = "VARBINARY"
	FieldDataTypeEnumLongvarbinary         FieldDataTypeEnum = "LONGVARBINARY"
	FieldDataTypeEnumNclob                 FieldDataTypeEnum = "NCLOB"
	FieldDataTypeEnumSqlxml                FieldDataTypeEnum = "SQLXML"
	FieldDataTypeEnumRefCursor             FieldDataTypeEnum = "REF_CURSOR"
	FieldDataTypeEnumTimeWithTimezone      FieldDataTypeEnum = "TIME_WITH_TIMEZONE"
	FieldDataTypeEnumTimestampWithTimezone FieldDataTypeEnum = "TIMESTAMP_WITH_TIMEZONE"
)

type Field struct {
	AdditionalDetails map[string]interface{} `json:"additionalDetails"`
	DataType          *FieldDataTypeEnum     `json:"dataType"`
	DefaultValue      *interface{}           `json:"defaultValue"`
	Description       *string                `json:"description"`
	Key               *bool                  `json:"key"`
	Name              *string                `json:"name"`
	Nullable          *bool                  `json:"nullable"`
	Reference         *Reference             `json:"reference"`
}
