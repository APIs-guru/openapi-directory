from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PersistentDiskScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_ZONAL = "SCOPE_ZONAL"
    SCOPE_REGIONAL = "SCOPE_REGIONAL"


@dataclass_json
@dataclass
class PersistentDisk:
    r"""PersistentDisk
    Specification of a persistent disk attached to a VM.
    """
    
    disk_size: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskSize') }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskType') }})
    provisioned_iops: Optional[Usage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provisionedIops') }})
    scope: Optional[PersistentDiskScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
