from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum(str, Enum):
    IMPRESSION_TYPE_UNSPECIFIED = "IMPRESSION_TYPE_UNSPECIFIED"
    PRESENTED = "PRESENTED"
    INTERACTED = "INTERACTED"


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3Impression:
    game_object_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gameObjectType' }})
    impression_type: Optional[GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impressionType' }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationName' }})
    
