from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ImportContextBakImportOptionsEncryptionOptions:
    cert_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certPath') }})
    pvk_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvkPassword') }})
    pvk_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvkPath') }})
    

@dataclass_json
@dataclass
class ImportContextBakImportOptions:
    r"""ImportContextBakImportOptions
    Import parameters specific to SQL Server .BAK files
    """
    
    encryption_options: Optional[ImportContextBakImportOptionsEncryptionOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionOptions') }})
    

@dataclass_json
@dataclass
class ImportContextCsvImportOptions:
    r"""ImportContextCsvImportOptions
    Options for importing data as CSV.
    """
    
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    escape_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('escapeCharacter') }})
    fields_terminated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldsTerminatedBy') }})
    lines_terminated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linesTerminatedBy') }})
    quote_character: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quoteCharacter') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    
class ImportContextFileTypeEnum(str, Enum):
    SQL_FILE_TYPE_UNSPECIFIED = "SQL_FILE_TYPE_UNSPECIFIED"
    SQL = "SQL"
    CSV = "CSV"
    BAK = "BAK"


@dataclass_json
@dataclass
class ImportContext:
    r"""ImportContext
    Database instance import context.
    """
    
    bak_import_options: Optional[ImportContextBakImportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bakImportOptions') }})
    csv_import_options: Optional[ImportContextCsvImportOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csvImportOptions') }})
    database: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('database') }})
    file_type: Optional[ImportContextFileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileType') }})
    import_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('importUser') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
