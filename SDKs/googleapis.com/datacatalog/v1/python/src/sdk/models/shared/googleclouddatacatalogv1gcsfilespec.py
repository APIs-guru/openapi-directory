from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDatacatalogV1GcsFileSpec:
    r"""GoogleCloudDatacatalogV1GcsFileSpec
    Specification of a single file in Cloud Storage.
    """
    
    file_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filePath') }})
    gcs_timestamps: Optional[GoogleCloudDatacatalogV1SystemTimestamps] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcsTimestamps') }})
    size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeBytes') }})
    
