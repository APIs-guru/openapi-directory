from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dynamiclistenerstate
from . import dynamiclistenerstate
from . import updatefailurestate
from . import dynamiclistenerstate


@dataclass_json
@dataclass
class DynamicListener:
    active_state: Optional[dynamiclistenerstate.DynamicListenerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeState' }})
    draining_state: Optional[dynamiclistenerstate.DynamicListenerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drainingState' }})
    error_state: Optional[updatefailurestate.UpdateFailureState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorState' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    warming_state: Optional[dynamiclistenerstate.DynamicListenerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warmingState' }})
    
