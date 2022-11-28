from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PersonalProtectionFaceMaskRequiredExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PersonalProtectionProtectiveEquipmentAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class PersonalProtection:
    r"""PersonalProtection
    Personal protection measures implemented by the hotel during COVID-19.
    """
    
    common_areas_offer_sanitizing_items: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonAreasOfferSanitizingItems') }})
    common_areas_offer_sanitizing_items_exception: Optional[PersonalProtectionCommonAreasOfferSanitizingItemsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonAreasOfferSanitizingItemsException') }})
    face_mask_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceMaskRequired') }})
    face_mask_required_exception: Optional[PersonalProtectionFaceMaskRequiredExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceMaskRequiredException') }})
    guest_room_hygiene_kits_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestRoomHygieneKitsAvailable') }})
    guest_room_hygiene_kits_available_exception: Optional[PersonalProtectionGuestRoomHygieneKitsAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('guestRoomHygieneKitsAvailableException') }})
    protective_equipment_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectiveEquipmentAvailable') }})
    protective_equipment_available_exception: Optional[PersonalProtectionProtectiveEquipmentAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectiveEquipmentAvailableException') }})
    
