from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2MetadataLocationTypeEnum(str, Enum):
    METADATATYPE_UNSPECIFIED = "METADATATYPE_UNSPECIFIED"
    STORAGE_METADATA = "STORAGE_METADATA"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2MetadataLocation:
    r"""GooglePrivacyDlpV2MetadataLocation
    Metadata Location
    """
    
    storage_label: Optional[GooglePrivacyDlpV2StorageMetadataLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storageLabel') }})
    type: Optional[GooglePrivacyDlpV2MetadataLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
