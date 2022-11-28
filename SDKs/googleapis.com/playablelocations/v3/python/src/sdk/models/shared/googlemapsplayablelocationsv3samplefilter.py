from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleFilter:
    r"""GoogleMapsPlayablelocationsV3SampleFilter
    Specifies the filters to use when searching for playable locations.
    """
    
    included_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includedTypes') }})
    max_location_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLocationCount') }})
    spacing: Optional[GoogleMapsPlayablelocationsV3SampleSpacingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spacing') }})
    
