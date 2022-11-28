from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ShareStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Share:
    r"""Share
    A Filestore share.
    """
    
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityGb') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mount_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nfs_export_options: Optional[List[NfsExportOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsExportOptions') }})
    state: Optional[ShareStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class ShareInput:
    r"""ShareInput
    A Filestore share.
    """
    
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityGb') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    mount_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountName') }})
    nfs_export_options: Optional[List[NfsExportOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsExportOptions') }})
    
