from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localcontrollerstate
from . import anthosvmsubfeaturestate


@dataclass_json
@dataclass
class AnthosVMMembershipState:
    local_controller_state: Optional[localcontrollerstate.LocalControllerState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localControllerState' }})
    subfeature_state: Optional[List[anthosvmsubfeaturestate.AnthosVMSubFeatureState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subfeatureState' }})
    
