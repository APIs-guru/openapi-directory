from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usage
from . import usage

class PersistentDiskScopeEnum(str, Enum):
    SCOPE_UNSPECIFIED = "SCOPE_UNSPECIFIED"
    SCOPE_ZONAL = "SCOPE_ZONAL"
    SCOPE_REGIONAL = "SCOPE_REGIONAL"


@dataclass_json
@dataclass
class PersistentDisk:
    disk_size: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSize' }})
    disk_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskType' }})
    provisioned_iops: Optional[usage.Usage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedIops' }})
    scope: Optional[PersistentDiskScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
