from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ModifyPushConfigRequest:
    r"""ModifyPushConfigRequest
    Request for the ModifyPushConfig method.
    """
    
    push_config: Optional[PushConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pushConfig') }})
    
