from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PlaceActionLink
    Represents a place action link and its attributes.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    is_editable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEditable') }})
    is_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPreferred') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    place_action_type: Optional[PlaceActionLinkPlaceActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeActionType') }})
    provider_type: Optional[PlaceActionLinkProviderTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerType') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class PlaceActionLinkInput:
    r"""PlaceActionLinkInput
    Represents a place action link and its attributes.
    """
    
    is_preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPreferred') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    place_action_type: Optional[PlaceActionLinkPlaceActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placeActionType') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
