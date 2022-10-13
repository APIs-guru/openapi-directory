from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleprivacydlpv2storagemetadatalabel

class GooglePrivacyDlpV2MetadataLocationTypeEnum(str, Enum):
    METADATATYPE_UNSPECIFIED = "METADATATYPE_UNSPECIFIED"
    STORAGE_METADATA = "STORAGE_METADATA"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2MetadataLocation:
    storage_label: Optional[googleprivacydlpv2storagemetadatalabel.GooglePrivacyDlpV2StorageMetadataLabel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storageLabel' }})
    type: Optional[GooglePrivacyDlpV2MetadataLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
