from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlaceActionTypeMetadataPlaceActionTypeEnum(str, Enum):
    PLACE_ACTION_TYPE_UNSPECIFIED = "PLACE_ACTION_TYPE_UNSPECIFIED"
    APPOINTMENT = "APPOINTMENT"
    ONLINE_APPOINTMENT = "ONLINE_APPOINTMENT"
    DINING_RESERVATION = "DINING_RESERVATION"
    FOOD_ORDERING = "FOOD_ORDERING"
    FOOD_DELIVERY = "FOOD_DELIVERY"
    FOOD_TAKEOUT = "FOOD_TAKEOUT"
    SHOP_ONLINE = "SHOP_ONLINE"


@dataclass_json
@dataclass
class PlaceActionTypeMetadata:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    place_action_type: Optional[PlaceActionTypeMetadataPlaceActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeActionType' }})
    
