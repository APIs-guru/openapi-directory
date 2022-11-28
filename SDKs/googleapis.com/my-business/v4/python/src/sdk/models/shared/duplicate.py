from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DuplicateAccessEnum(str, Enum):
    ACCESS_UNSPECIFIED = "ACCESS_UNSPECIFIED"
    ACCESS_UNKNOWN = "ACCESS_UNKNOWN"
    ALLOWED = "ALLOWED"
    INSUFFICIENT = "INSUFFICIENT"


@dataclass_json
@dataclass
class Duplicate:
    r"""Duplicate
    Information about the location that this location duplicates.
    """
    
    access: Optional[DuplicateAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access') }})
    location_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeId') }})
    
