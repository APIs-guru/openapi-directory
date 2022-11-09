import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InputParameterDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED"
,    DataTypeInt = "DATA_TYPE_INT"
,    DataTypeSmallint = "DATA_TYPE_SMALLINT"
,    DataTypeDouble = "DATA_TYPE_DOUBLE"
,    DataTypeDate = "DATA_TYPE_DATE"
,    DataTypeDatetime = "DATA_TYPE_DATETIME"
,    DataTypeTime = "DATA_TYPE_TIME"
,    DataTypeString = "DATA_TYPE_STRING"
,    DataTypeLong = "DATA_TYPE_LONG"
,    DataTypeBoolean = "DATA_TYPE_BOOLEAN"
,    DataTypeDecimal = "DATA_TYPE_DECIMAL"
,    DataTypeUuid = "DATA_TYPE_UUID"
,    DataTypeBlob = "DATA_TYPE_BLOB"
,    DataTypeBit = "DATA_TYPE_BIT"
,    DataTypeTinyint = "DATA_TYPE_TINYINT"
,    DataTypeInteger = "DATA_TYPE_INTEGER"
,    DataTypeBigint = "DATA_TYPE_BIGINT"
,    DataTypeFloat = "DATA_TYPE_FLOAT"
,    DataTypeReal = "DATA_TYPE_REAL"
,    DataTypeNumeric = "DATA_TYPE_NUMERIC"
,    DataTypeChar = "DATA_TYPE_CHAR"
,    DataTypeVarchar = "DATA_TYPE_VARCHAR"
,    DataTypeLongvarchar = "DATA_TYPE_LONGVARCHAR"
,    DataTypeTimestamp = "DATA_TYPE_TIMESTAMP"
,    DataTypeNchar = "DATA_TYPE_NCHAR"
,    DataTypeNvarchar = "DATA_TYPE_NVARCHAR"
,    DataTypeLongnvarchar = "DATA_TYPE_LONGNVARCHAR"
,    DataTypeNull = "DATA_TYPE_NULL"
,    DataTypeOther = "DATA_TYPE_OTHER"
,    DataTypeJavaObject = "DATA_TYPE_JAVA_OBJECT"
,    DataTypeDistinct = "DATA_TYPE_DISTINCT"
,    DataTypeStruct = "DATA_TYPE_STRUCT"
,    DataTypeArray = "DATA_TYPE_ARRAY"
,    DataTypeClob = "DATA_TYPE_CLOB"
,    DataTypeRef = "DATA_TYPE_REF"
,    DataTypeDatalink = "DATA_TYPE_DATALINK"
,    DataTypeRowid = "DATA_TYPE_ROWID"
,    DataTypeBinary = "DATA_TYPE_BINARY"
,    DataTypeVarbinary = "DATA_TYPE_VARBINARY"
,    DataTypeLongvarbinary = "DATA_TYPE_LONGVARBINARY"
,    DataTypeNclob = "DATA_TYPE_NCLOB"
,    DataTypeSqlxml = "DATA_TYPE_SQLXML"
,    DataTypeRefCursor = "DATA_TYPE_REF_CURSOR"
,    DataTypeTimeWithTimezone = "DATA_TYPE_TIME_WITH_TIMEZONE"
,    DataTypeTimestampWithTimezone = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"
}


// InputParameter
/** 
 * Metadata of an input parameter.
**/
export class InputParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataType" })
  dataType?: InputParameterDataTypeEnum;

  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=nullable" })
  nullable?: boolean;

  @Metadata({ data: "json, name=parameter" })
  parameter?: string;
}
