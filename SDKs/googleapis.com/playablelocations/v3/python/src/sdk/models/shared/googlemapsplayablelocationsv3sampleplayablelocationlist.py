from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationList:
    r"""GoogleMapsPlayablelocationsV3SamplePlayableLocationList
    A list of PlayableLocation objects that satisfies a single Criterion.
    """
    
    locations: Optional[List[GoogleMapsPlayablelocationsV3SamplePlayableLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
