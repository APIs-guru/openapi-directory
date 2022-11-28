from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeFlightEmissionsResponse:
    r"""ComputeFlightEmissionsResponse
    Output definition for the ComputeFlightEmissions response.
    """
    
    flight_emissions: Optional[List[FlightWithEmissions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flightEmissions') }})
    model_version: Optional[ModelVersion] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVersion') }})
    
