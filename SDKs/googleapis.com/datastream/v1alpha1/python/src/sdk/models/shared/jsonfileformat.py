from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class JSONFileFormatCompressionEnum(str, Enum):
    JSON_COMPRESSION_UNSPECIFIED = "JSON_COMPRESSION_UNSPECIFIED"
    NO_COMPRESSION = "NO_COMPRESSION"
    GZIP = "GZIP"

class JSONFileFormatSchemaFileFormatEnum(str, Enum):
    SCHEMA_FILE_FORMAT_UNSPECIFIED = "SCHEMA_FILE_FORMAT_UNSPECIFIED"
    NO_SCHEMA_FILE = "NO_SCHEMA_FILE"
    AVRO_SCHEMA_FILE = "AVRO_SCHEMA_FILE"


@dataclass_json
@dataclass
class JSONFileFormat:
    r"""JSONFileFormat
    JSON file format configuration.
    """
    
    compression: Optional[JSONFileFormatCompressionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compression') }})
    schema_file_format: Optional[JSONFileFormatSchemaFileFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaFileFormat') }})
    
