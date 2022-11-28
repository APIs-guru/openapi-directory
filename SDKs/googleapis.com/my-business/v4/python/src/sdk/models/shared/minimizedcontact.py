from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MinimizedContactContactlessCheckinCheckoutExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class MinimizedContactDigitalGuestRoomKeysExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class MinimizedContactPlasticKeycardsDisinfectedExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class MinimizedContactRoomBookingsBufferExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class MinimizedContact:
    r"""MinimizedContact
    Minimized contact measures implemented by the hotel during COVID-19.
    """
    
    contactless_checkin_checkout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactlessCheckinCheckout') }})
    contactless_checkin_checkout_exception: Optional[MinimizedContactContactlessCheckinCheckoutExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactlessCheckinCheckoutException') }})
    digital_guest_room_keys: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalGuestRoomKeys') }})
    digital_guest_room_keys_exception: Optional[MinimizedContactDigitalGuestRoomKeysExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('digitalGuestRoomKeysException') }})
    housekeeping_scheduled_request_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('housekeepingScheduledRequestOnly') }})
    housekeeping_scheduled_request_only_exception: Optional[MinimizedContactHousekeepingScheduledRequestOnlyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('housekeepingScheduledRequestOnlyException') }})
    no_high_touch_items_common_areas: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noHighTouchItemsCommonAreas') }})
    no_high_touch_items_common_areas_exception: Optional[MinimizedContactNoHighTouchItemsCommonAreasExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noHighTouchItemsCommonAreasException') }})
    no_high_touch_items_guest_rooms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noHighTouchItemsGuestRooms') }})
    no_high_touch_items_guest_rooms_exception: Optional[MinimizedContactNoHighTouchItemsGuestRoomsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noHighTouchItemsGuestRoomsException') }})
    plastic_keycards_disinfected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plasticKeycardsDisinfected') }})
    plastic_keycards_disinfected_exception: Optional[MinimizedContactPlasticKeycardsDisinfectedExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plasticKeycardsDisinfectedException') }})
    room_bookings_buffer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomBookingsBuffer') }})
    room_bookings_buffer_exception: Optional[MinimizedContactRoomBookingsBufferExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomBookingsBufferException') }})
    
