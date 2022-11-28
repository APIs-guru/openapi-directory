from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AgentPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class AgentPool:
    r"""AgentPool
    Represents an On-Premises Agent pool.
    """
    
    bandwidth_limit: Optional[BandwidthLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimit') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[AgentPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class AgentPoolInput:
    r"""AgentPoolInput
    Represents an On-Premises Agent pool.
    """
    
    bandwidth_limit: Optional[BandwidthLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimit') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
