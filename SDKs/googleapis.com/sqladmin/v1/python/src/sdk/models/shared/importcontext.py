from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ImportContextBakImportOptionsEncryptionOptions:
    cert_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certPath' }})
    pvk_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvkPassword' }})
    pvk_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvkPath' }})
    

@dataclass_json
@dataclass
class ImportContextBakImportOptions:
    encryption_options: Optional[ImportContextBakImportOptionsEncryptionOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionOptions' }})
    

@dataclass_json
@dataclass
class ImportContextCsvImportOptions:
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'escapeCharacter' }})
    fields_terminated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldsTerminatedBy' }})
    lines_terminated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linesTerminatedBy' }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteCharacter' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    
class ImportContextFileTypeEnum(str, Enum):
    SQL_FILE_TYPE_UNSPECIFIED = "SQL_FILE_TYPE_UNSPECIFIED"
    SQL = "SQL"
    CSV = "CSV"
    BAK = "BAK"


@dataclass_json
@dataclass
class ImportContext:
    bak_import_options: Optional[ImportContextBakImportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bakImportOptions' }})
    csv_import_options: Optional[ImportContextCsvImportOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csvImportOptions' }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'database' }})
    file_type: Optional[ImportContextFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileType' }})
    import_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'importUser' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
