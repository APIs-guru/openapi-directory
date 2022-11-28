from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InspectURLIndexResponse:
    r"""InspectURLIndexResponse
    Index-Status inspection response.
    """
    
    inspection_result: Optional[URLInspectionResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inspectionResult') }})
    
