from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import nfsexportoptions

class ShareStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Share:
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacityGb' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    mount_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mountName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nfs_export_options: Optional[List[nfsexportoptions.NfsExportOptions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsExportOptions' }})
    state: Optional[ShareStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
