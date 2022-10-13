from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class LocationListLocationTypeEnum(str, Enum):
    TARGETING_LOCATION_TYPE_UNSPECIFIED = "TARGETING_LOCATION_TYPE_UNSPECIFIED"
    TARGETING_LOCATION_TYPE_PROXIMITY = "TARGETING_LOCATION_TYPE_PROXIMITY"
    TARGETING_LOCATION_TYPE_REGIONAL = "TARGETING_LOCATION_TYPE_REGIONAL"


@dataclass_json
@dataclass
class LocationList:
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    location_list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationListId' }})
    location_type: Optional[LocationListLocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
