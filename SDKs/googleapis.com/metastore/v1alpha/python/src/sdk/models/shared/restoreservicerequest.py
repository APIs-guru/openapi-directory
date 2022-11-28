from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RestoreServiceRequestRestoreTypeEnum(str, Enum):
    RESTORE_TYPE_UNSPECIFIED = "RESTORE_TYPE_UNSPECIFIED"
    FULL = "FULL"
    METADATA_ONLY = "METADATA_ONLY"


@dataclass_json
@dataclass
class RestoreServiceRequest:
    r"""RestoreServiceRequest
    Request message for DataprocMetastore.Restore.
    """
    
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    restore_type: Optional[RestoreServiceRequestRestoreTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreType') }})
    
