from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServicesBaggageStorageExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesConciergeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesConvenienceStoreExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesCurrencyExchangeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesElevatorExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesFrontDeskExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesFullServiceLaundryExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesGiftShopExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesSelfServiceLaundryExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesSocialHourExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesTwentyFourHourFrontDeskExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ServicesWakeUpCallsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Services:
    r"""Services
    Conveniences or help provided by the property to facilitate an easier, more comfortable stay.
    """
    
    baggage_storage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baggageStorage') }})
    baggage_storage_exception: Optional[ServicesBaggageStorageExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baggageStorageException') }})
    concierge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concierge') }})
    concierge_exception: Optional[ServicesConciergeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conciergeException') }})
    convenience_store: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convenienceStore') }})
    convenience_store_exception: Optional[ServicesConvenienceStoreExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('convenienceStoreException') }})
    currency_exchange: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyExchange') }})
    currency_exchange_exception: Optional[ServicesCurrencyExchangeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyExchangeException') }})
    elevator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elevator') }})
    elevator_exception: Optional[ServicesElevatorExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elevatorException') }})
    front_desk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontDesk') }})
    front_desk_exception: Optional[ServicesFrontDeskExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontDeskException') }})
    full_service_laundry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullServiceLaundry') }})
    full_service_laundry_exception: Optional[ServicesFullServiceLaundryExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullServiceLaundryException') }})
    gift_shop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftShop') }})
    gift_shop_exception: Optional[ServicesGiftShopExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftShopException') }})
    languages_spoken: Optional[LanguagesSpoken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languagesSpoken') }})
    self_service_laundry: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfServiceLaundry') }})
    self_service_laundry_exception: Optional[ServicesSelfServiceLaundryExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfServiceLaundryException') }})
    social_hour: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialHour') }})
    social_hour_exception: Optional[ServicesSocialHourExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialHourException') }})
    twenty_four_hour_front_desk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twentyFourHourFrontDesk') }})
    twenty_four_hour_front_desk_exception: Optional[ServicesTwentyFourHourFrontDeskExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twentyFourHourFrontDeskException') }})
    wake_up_calls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wakeUpCalls') }})
    wake_up_calls_exception: Optional[ServicesWakeUpCallsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wakeUpCallsException') }})
    
