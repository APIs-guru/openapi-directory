from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SyncResponsePayload:
    r"""SyncResponsePayload
    Payload containing device information.
    """
    
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUserId') }})
    devices: Optional[List[Device]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devices') }})
    
