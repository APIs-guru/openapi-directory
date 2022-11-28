from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AdvertisedIDTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EDDYSTONE = "EDDYSTONE"
    IBEACON = "IBEACON"
    ALTBEACON = "ALTBEACON"
    EDDYSTONE_EID = "EDDYSTONE_EID"


@dataclass_json
@dataclass
class AdvertisedID:
    r"""AdvertisedID
    Defines a unique identifier of a beacon as broadcast by the device.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[AdvertisedIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
