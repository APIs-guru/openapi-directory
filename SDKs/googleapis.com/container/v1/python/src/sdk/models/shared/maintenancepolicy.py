from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MaintenancePolicy:
    r"""MaintenancePolicy
    MaintenancePolicy defines the maintenance policy to be used for the cluster.
    """
    
    resource_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceVersion') }})
    window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    
