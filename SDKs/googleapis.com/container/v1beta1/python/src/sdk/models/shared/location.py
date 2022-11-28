from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LocationTypeEnum(str, Enum):
    LOCATION_TYPE_UNSPECIFIED = "LOCATION_TYPE_UNSPECIFIED"
    ZONE = "ZONE"
    REGION = "REGION"


@dataclass_json
@dataclass
class Location:
    r"""Location
    Location returns the location name, and if the location is recommended for GKE cluster scheduling.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    recommended: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended') }})
    type: Optional[LocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
