from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AdvertisedIDTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    EDDYSTONE = "EDDYSTONE"
    IBEACON = "IBEACON"
    ALTBEACON = "ALTBEACON"
    EDDYSTONE_EID = "EDDYSTONE_EID"


@dataclass_json
@dataclass
class AdvertisedID:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[AdvertisedIDTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
