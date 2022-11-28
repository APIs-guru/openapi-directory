from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueuedResource:
    r"""QueuedResource
    A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
    """
    
    best_effort: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffort') }})
    guaranteed: Optional[Guaranteed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteed') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    queueing_policy: Optional[QueueingPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueingPolicy') }})
    state: Optional[QueuedResourceState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tpu: Optional[Tpu] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpu') }})
    

@dataclass_json
@dataclass
class QueuedResourceInput:
    r"""QueuedResourceInput
    A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.
    """
    
    best_effort: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bestEffort') }})
    guaranteed: Optional[Guaranteed] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guaranteed') }})
    queueing_policy: Optional[QueueingPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queueingPolicy') }})
    state: Optional[QueuedResourceState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    tpu: Optional[TpuInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tpu') }})
    
