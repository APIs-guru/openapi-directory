from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum(str, Enum):
    IMPRESSION_TYPE_UNSPECIFIED = "IMPRESSION_TYPE_UNSPECIFIED"
    PRESENTED = "PRESENTED"
    INTERACTED = "INTERACTED"


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3Impression:
    r"""GoogleMapsPlayablelocationsV3Impression
    Encapsulates impression event details.
    """
    
    game_object_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameObjectType') }})
    impression_type: Optional[GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionType') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    
