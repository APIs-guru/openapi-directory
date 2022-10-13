from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import onclick

class ImageButtonIconEnum(str, Enum):
    ICON_UNSPECIFIED = "ICON_UNSPECIFIED"
    AIRPLANE = "AIRPLANE"
    BOOKMARK = "BOOKMARK"
    BUS = "BUS"
    CAR = "CAR"
    CLOCK = "CLOCK"
    CONFIRMATION_NUMBER_ICON = "CONFIRMATION_NUMBER_ICON"
    DOLLAR = "DOLLAR"
    DESCRIPTION = "DESCRIPTION"
    EMAIL = "EMAIL"
    EVENT_PERFORMER = "EVENT_PERFORMER"
    EVENT_SEAT = "EVENT_SEAT"
    FLIGHT_ARRIVAL = "FLIGHT_ARRIVAL"
    FLIGHT_DEPARTURE = "FLIGHT_DEPARTURE"
    HOTEL = "HOTEL"
    HOTEL_ROOM_TYPE = "HOTEL_ROOM_TYPE"
    INVITE = "INVITE"
    MAP_PIN = "MAP_PIN"
    MEMBERSHIP = "MEMBERSHIP"
    MULTIPLE_PEOPLE = "MULTIPLE_PEOPLE"
    OFFER = "OFFER"
    PERSON = "PERSON"
    PHONE = "PHONE"
    RESTAURANT_ICON = "RESTAURANT_ICON"
    SHOPPING_CART = "SHOPPING_CART"
    STAR = "STAR"
    STORE = "STORE"
    TICKET = "TICKET"
    TRAIN = "TRAIN"
    VIDEO_CAMERA = "VIDEO_CAMERA"
    VIDEO_PLAY = "VIDEO_PLAY"


@dataclass_json
@dataclass
class ImageButton:
    icon: Optional[ImageButtonIconEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon' }})
    icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iconUrl' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    on_click: Optional[onclick.OnClick] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onClick' }})
    
