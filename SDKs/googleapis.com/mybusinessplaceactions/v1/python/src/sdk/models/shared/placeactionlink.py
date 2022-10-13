from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PlaceActionLinkPlaceActionTypeEnum(str, Enum):
    PLACE_ACTION_TYPE_UNSPECIFIED = "PLACE_ACTION_TYPE_UNSPECIFIED"
    APPOINTMENT = "APPOINTMENT"
    ONLINE_APPOINTMENT = "ONLINE_APPOINTMENT"
    DINING_RESERVATION = "DINING_RESERVATION"
    FOOD_ORDERING = "FOOD_ORDERING"
    FOOD_DELIVERY = "FOOD_DELIVERY"
    FOOD_TAKEOUT = "FOOD_TAKEOUT"
    SHOP_ONLINE = "SHOP_ONLINE"

class PlaceActionLinkProviderTypeEnum(str, Enum):
    PROVIDER_TYPE_UNSPECIFIED = "PROVIDER_TYPE_UNSPECIFIED"
    MERCHANT = "MERCHANT"
    AGGREGATOR_3_P = "AGGREGATOR_3P"


@dataclass_json
@dataclass
class PlaceActionLink:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    is_editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEditable' }})
    is_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPreferred' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    place_action_type: Optional[PlaceActionLinkPlaceActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeActionType' }})
    provider_type: Optional[PlaceActionLinkProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerType' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
