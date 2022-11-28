from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SeekSubscriptionRequestNamedTargetEnum(str, Enum):
    NAMED_TARGET_UNSPECIFIED = "NAMED_TARGET_UNSPECIFIED"
    TAIL = "TAIL"
    HEAD = "HEAD"


@dataclass_json
@dataclass
class SeekSubscriptionRequest:
    r"""SeekSubscriptionRequest
    Request for SeekSubscription.
    """
    
    named_target: Optional[SeekSubscriptionRequestNamedTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedTarget') }})
    time_target: Optional[TimeTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeTarget') }})
    
