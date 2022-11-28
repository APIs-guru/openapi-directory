from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FlightWithEmissions:
    r"""FlightWithEmissions
    Direct flight with emission estimates.
    """
    
    emissions_grams_per_pax: Optional[EmissionsGramsPerPax] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emissionsGramsPerPax') }})
    flight: Optional[Flight] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('flight') }})
    
