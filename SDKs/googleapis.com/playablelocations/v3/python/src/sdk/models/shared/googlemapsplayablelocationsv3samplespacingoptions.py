from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum(str, Enum):
    POINT_TYPE_UNSPECIFIED = "POINT_TYPE_UNSPECIFIED"
    CENTER_POINT = "CENTER_POINT"
    SNAPPED_POINT = "SNAPPED_POINT"


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleSpacingOptions:
    min_spacing_meters: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSpacingMeters' }})
    point_type: Optional[GoogleMapsPlayablelocationsV3SampleSpacingOptionsPointTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointType' }})
    
