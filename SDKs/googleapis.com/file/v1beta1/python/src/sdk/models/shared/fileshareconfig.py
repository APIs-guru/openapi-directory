from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileShareConfig:
    r"""FileShareConfig
    File share configuration for the instance.
    """
    
    capacity_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacityGb') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nfs_export_options: Optional[List[NfsExportOptions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsExportOptions') }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBackup') }})
    
