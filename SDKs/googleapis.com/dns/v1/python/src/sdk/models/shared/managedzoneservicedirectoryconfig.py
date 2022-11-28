from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedZoneServiceDirectoryConfig:
    r"""ManagedZoneServiceDirectoryConfig
    Contains information about Service Directory-backed zones.
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    namespace: Optional[ManagedZoneServiceDirectoryConfigNamespace] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    
