from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2fileset

class GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum(str, Enum):
    FILE_TYPE_UNSPECIFIED = "FILE_TYPE_UNSPECIFIED"
    BINARY_FILE = "BINARY_FILE"
    TEXT_FILE = "TEXT_FILE"
    IMAGE = "IMAGE"
    WORD = "WORD"
    PDF = "PDF"
    AVRO = "AVRO"
    CSV = "CSV"
    TSV = "TSV"
    POWERPOINT = "POWERPOINT"
    EXCEL = "EXCEL"

class GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum(str, Enum):
    SAMPLE_METHOD_UNSPECIFIED = "SAMPLE_METHOD_UNSPECIFIED"
    TOP = "TOP"
    RANDOM_START = "RANDOM_START"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CloudStorageOptions:
    bytes_limit_per_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesLimitPerFile' }})
    bytes_limit_per_file_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bytesLimitPerFilePercent' }})
    file_set: Optional[googleprivacydlpv2fileset.GooglePrivacyDlpV2FileSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSet' }})
    file_types: Optional[List[GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileTypes' }})
    files_limit_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filesLimitPercent' }})
    sample_method: Optional[GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleMethod' }})
    
