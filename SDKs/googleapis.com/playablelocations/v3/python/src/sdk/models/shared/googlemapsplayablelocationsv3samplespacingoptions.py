from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum(str, Enum):
    POINT_TYPE_UNSPECIFIED = "POINT_TYPE_UNSPECIFIED"
    CENTER_POINT = "CENTER_POINT"
    SNAPPED_POINT = "SNAPPED_POINT"


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleSpacingOptions:
    r"""GoogleMapsPlayablelocationsV3SampleSpacingOptions
    A set of options that specifies the separation between playable locations.
    """
    
    min_spacing_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSpacingMeters') }})
    point_type: Optional[GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointType') }})
    
