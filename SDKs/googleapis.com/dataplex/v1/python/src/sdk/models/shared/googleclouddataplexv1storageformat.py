from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1storageformatcsvoptions
from . import googleclouddataplexv1storageformatjsonoptions

class GoogleCloudDataplexV1StorageFormatCompressionFormatEnum(str, Enum):
    COMPRESSION_FORMAT_UNSPECIFIED = "COMPRESSION_FORMAT_UNSPECIFIED"
    GZIP = "GZIP"
    BZIP2 = "BZIP2"

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


@dataclass_json
@dataclass
class GoogleCloudDataplexV1StorageFormat:
    compression_format: Optional[GoogleCloudDataplexV1StorageFormatCompressionFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compressionFormat' }})
    csv: Optional[googleclouddataplexv1storageformatcsvoptions.GoogleCloudDataplexV1StorageFormatCsvOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csv' }})
    format: Optional[GoogleCloudDataplexV1StorageFormatFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    json: Optional[googleclouddataplexv1storageformatjsonoptions.GoogleCloudDataplexV1StorageFormatJSONOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'json' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    
