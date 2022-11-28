from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CommonFeatureState:
    r"""CommonFeatureState
    CommonFeatureState contains Hub-wide Feature status information.
    """
    
    appdevexperience: Optional[AppDevExperienceFeatureState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appdevexperience') }})
    fleetobservability: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleetobservability') }})
    state: Optional[FeatureState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
