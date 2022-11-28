from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDataplexV1StorageFormatFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    PARQUET = "PARQUET"
    AVRO = "AVRO"
    ORC = "ORC"
    CSV = "CSV"
    JSON = "JSON"
    IMAGE = "IMAGE"
    AUDIO = "AUDIO"
    VIDEO = "VIDEO"
    TEXT = "TEXT"
    TFRECORD = "TFRECORD"
    OTHER = "OTHER"
    UNKNOWN = "UNKNOWN"

class GoogleCloudDataplexV1StorageFormatCompressionFormatEnum(str, Enum):
    COMPRESSION_FORMAT_UNSPECIFIED = "COMPRESSION_FORMAT_UNSPECIFIED"
    GZIP = "GZIP"
    BZIP2 = "BZIP2"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1StorageFormat:
    r"""GoogleCloudDataplexV1StorageFormat
    Describes the format of the data within its storage location.
    """
    
    compression_format: Optional[GoogleCloudDataplexV1StorageFormatCompressionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionFormat') }})
    csv: Optional[GoogleCloudDataplexV1StorageFormatCsvOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv') }})
    format: Optional[GoogleCloudDataplexV1StorageFormatFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    json: Optional[GoogleCloudDataplexV1StorageFormatJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    

@dataclass_json
@dataclass
class GoogleCloudDataplexV1StorageFormatInput:
    r"""GoogleCloudDataplexV1StorageFormatInput
    Describes the format of the data within its storage location.
    """
    
    compression_format: Optional[GoogleCloudDataplexV1StorageFormatCompressionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compressionFormat') }})
    csv: Optional[GoogleCloudDataplexV1StorageFormatCsvOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('csv') }})
    json: Optional[GoogleCloudDataplexV1StorageFormatJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('json') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    
