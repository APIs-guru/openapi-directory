from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResultMetadataDataTypeEnum(str, Enum):
    DATA_TYPE_UNSPECIFIED = "DATA_TYPE_UNSPECIFIED"
    INT = "INT"
    SMALLINT = "SMALLINT"
    DOUBLE = "DOUBLE"
    DATE = "DATE"
    DATETIME = "DATETIME"
    TIME = "TIME"
    STRING = "STRING"
    LONG = "LONG"
    BOOLEAN = "BOOLEAN"
    DECIMAL = "DECIMAL"
    UUID = "UUID"
    BLOB = "BLOB"
    BIT = "BIT"
    TINYINT = "TINYINT"
    INTEGER = "INTEGER"
    BIGINT = "BIGINT"
    FLOAT = "FLOAT"
    REAL = "REAL"
    NUMERIC = "NUMERIC"
    CHAR = "CHAR"
    VARCHAR = "VARCHAR"
    LONGVARCHAR = "LONGVARCHAR"
    TIMESTAMP = "TIMESTAMP"
    NCHAR = "NCHAR"
    NVARCHAR = "NVARCHAR"
    LONGNVARCHAR = "LONGNVARCHAR"
    NULL = "NULL"
    OTHER = "OTHER"
    JAVA_OBJECT = "JAVA_OBJECT"
    DISTINCT = "DISTINCT"
    STRUCT = "STRUCT"
    ARRAY = "ARRAY"
    CLOB = "CLOB"
    REF = "REF"
    DATALINK = "DATALINK"
    ROWID = "ROWID"
    BINARY = "BINARY"
    VARBINARY = "VARBINARY"
    LONGVARBINARY = "LONGVARBINARY"
    NCLOB = "NCLOB"
    SQLXML = "SQLXML"
    REF_CURSOR = "REF_CURSOR"
    TIME_WITH_TIMEZONE = "TIME_WITH_TIMEZONE"
    TIMESTAMP_WITH_TIMEZONE = "TIMESTAMP_WITH_TIMEZONE"


@dataclass_json
@dataclass
class ResultMetadata:
    r"""ResultMetadata
    Result Metadata message contains metadata about the result returned after executing an Action.
    """
    
    data_type: Optional[ResultMetadataDataTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
