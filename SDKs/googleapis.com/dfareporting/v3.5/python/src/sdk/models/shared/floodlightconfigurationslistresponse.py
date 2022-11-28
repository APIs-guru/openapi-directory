from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FloodlightConfigurationsListResponse:
    r"""FloodlightConfigurationsListResponse
    Floodlight Configuration List Response
    """
    
    floodlight_configurations: Optional[List[FloodlightConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floodlightConfigurations') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
