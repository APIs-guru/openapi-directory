from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class InputParameterDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    DATA_TYPE_INT = "DATA_TYPE_INT"
    DATA_TYPE_SMALLINT = "DATA_TYPE_SMALLINT"
    DATA_TYPE_DOUBLE = "DATA_TYPE_DOUBLE"
    DATA_TYPE_DATE = "DATA_TYPE_DATE"
    DATA_TYPE_DATETIME = "DATA_TYPE_DATETIME"
    DATA_TYPE_TIME = "DATA_TYPE_TIME"
    DATA_TYPE_STRING = "DATA_TYPE_STRING"
    DATA_TYPE_LONG = "DATA_TYPE_LONG"
    DATA_TYPE_BOOLEAN = "DATA_TYPE_BOOLEAN"
    DATA_TYPE_DECIMAL = "DATA_TYPE_DECIMAL"
    DATA_TYPE_UUID = "DATA_TYPE_UUID"
    DATA_TYPE_BLOB = "DATA_TYPE_BLOB"
    DATA_TYPE_BIT = "DATA_TYPE_BIT"
    DATA_TYPE_TINYINT = "DATA_TYPE_TINYINT"
    DATA_TYPE_INTEGER = "DATA_TYPE_INTEGER"
    DATA_TYPE_BIGINT = "DATA_TYPE_BIGINT"
    DATA_TYPE_FLOAT = "DATA_TYPE_FLOAT"
    DATA_TYPE_REAL = "DATA_TYPE_REAL"
    DATA_TYPE_NUMERIC = "DATA_TYPE_NUMERIC"
    DATA_TYPE_CHAR = "DATA_TYPE_CHAR"
    DATA_TYPE_VARCHAR = "DATA_TYPE_VARCHAR"
    DATA_TYPE_LONGVARCHAR = "DATA_TYPE_LONGVARCHAR"
    DATA_TYPE_TIMESTAMP = "DATA_TYPE_TIMESTAMP"
    DATA_TYPE_NCHAR = "DATA_TYPE_NCHAR"
    DATA_TYPE_NVARCHAR = "DATA_TYPE_NVARCHAR"
    DATA_TYPE_LONGNVARCHAR = "DATA_TYPE_LONGNVARCHAR"
    DATA_TYPE_NULL = "DATA_TYPE_NULL"
    DATA_TYPE_OTHER = "DATA_TYPE_OTHER"
    DATA_TYPE_JAVA_OBJECT = "DATA_TYPE_JAVA_OBJECT"
    DATA_TYPE_DISTINCT = "DATA_TYPE_DISTINCT"
    DATA_TYPE_STRUCT = "DATA_TYPE_STRUCT"
    DATA_TYPE_ARRAY = "DATA_TYPE_ARRAY"
    DATA_TYPE_CLOB = "DATA_TYPE_CLOB"
    DATA_TYPE_REF = "DATA_TYPE_REF"
    DATA_TYPE_DATALINK = "DATA_TYPE_DATALINK"
    DATA_TYPE_ROWID = "DATA_TYPE_ROWID"
    DATA_TYPE_BINARY = "DATA_TYPE_BINARY"
    DATA_TYPE_VARBINARY = "DATA_TYPE_VARBINARY"
    DATA_TYPE_LONGVARBINARY = "DATA_TYPE_LONGVARBINARY"
    DATA_TYPE_NCLOB = "DATA_TYPE_NCLOB"
    DATA_TYPE_SQLXML = "DATA_TYPE_SQLXML"
    DATA_TYPE_REF_CURSOR = "DATA_TYPE_REF_CURSOR"
    DATA_TYPE_TIME_WITH_TIMEZONE = "DATA_TYPE_TIME_WITH_TIMEZONE"
    DATA_TYPE_TIMESTAMP_WITH_TIMEZONE = "DATA_TYPE_TIMESTAMP_WITH_TIMEZONE"


@dataclass_json
@dataclass
class InputParameter:
    data_type: Optional[InputParameterDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    default_value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultValue' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    nullable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nullable' }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    
