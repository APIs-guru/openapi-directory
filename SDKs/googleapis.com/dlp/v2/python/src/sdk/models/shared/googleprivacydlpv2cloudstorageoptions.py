from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GooglePrivacyDlpV2CloudStorageOptions
    Options defining a file or a set of files within a Cloud Storage bucket.
    """
    
    bytes_limit_per_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesLimitPerFile') }})
    bytes_limit_per_file_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bytesLimitPerFilePercent') }})
    file_set: Optional[GooglePrivacyDlpV2FileSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSet') }})
    file_types: Optional[List[GooglePrivacyDlpV2CloudStorageOptionsFileTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileTypes') }})
    files_limit_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filesLimitPercent') }})
    sample_method: Optional[GooglePrivacyDlpV2CloudStorageOptionsSampleMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleMethod') }})
    
