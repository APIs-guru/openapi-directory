from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExportContextCsvExportOptions:
    escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escapeCharacter' }})
    fields_terminated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldsTerminatedBy' }})
    lines_terminated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linesTerminatedBy' }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteCharacter' }})
    select_query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectQuery' }})
    
class ExportContextFileTypeEnum(str, Enum):
    SQL_FILE_TYPE_UNSPECIFIED = "SQL_FILE_TYPE_UNSPECIFIED"
    SQL = "SQL"
    CSV = "CSV"
    BAK = "BAK"


@dataclass_json
@dataclass
class ExportContextSQLExportOptionsMysqlExportOptions:
    master_data: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterData' }})
    

@dataclass_json
@dataclass
class ExportContextSQLExportOptions:
    mysql_export_options: Optional[ExportContextSQLExportOptionsMysqlExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mysqlExportOptions' }})
    schema_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaOnly' }})
    tables: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    

@dataclass_json
@dataclass
class ExportContext:
    csv_export_options: Optional[ExportContextCsvExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvExportOptions' }})
    databases: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databases' }})
    file_type: Optional[ExportContextFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    offload: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offload' }})
    sql_export_options: Optional[ExportContextSQLExportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlExportOptions' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
