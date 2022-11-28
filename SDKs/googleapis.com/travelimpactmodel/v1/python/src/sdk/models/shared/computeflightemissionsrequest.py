from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeFlightEmissionsRequest:
    r"""ComputeFlightEmissionsRequest
    Input definition for the ComputeFlightEmissions request.
    """
    
    flights: Optional[List[Flight]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flights') }})
    
