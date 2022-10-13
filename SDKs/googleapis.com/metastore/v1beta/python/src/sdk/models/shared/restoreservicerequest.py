from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RestoreServiceRequestRestoreTypeEnum(str, Enum):
    RESTORE_TYPE_UNSPECIFIED = "RESTORE_TYPE_UNSPECIFIED"
    FULL = "FULL"
    METADATA_ONLY = "METADATA_ONLY"


@dataclass_json
@dataclass
class RestoreServiceRequest:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    restore_type: Optional[RestoreServiceRequestRestoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreType' }})
    
