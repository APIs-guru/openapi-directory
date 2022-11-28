from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TransportationAirportShuttleExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class TransportationCarRentalOnPropertyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class TransportationFreeAirportShuttleExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class TransportationFreePrivateCarServiceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class TransportationLocalShuttleExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class TransportationPrivateCarServiceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class TransportationTransferExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Transportation:
    r"""Transportation
    Vehicles or vehicular services facilitated or owned by the property.
    """
    
    airport_shuttle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airportShuttle') }})
    airport_shuttle_exception: Optional[TransportationAirportShuttleExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airportShuttleException') }})
    car_rental_on_property: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carRentalOnProperty') }})
    car_rental_on_property_exception: Optional[TransportationCarRentalOnPropertyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carRentalOnPropertyException') }})
    free_airport_shuttle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeAirportShuttle') }})
    free_airport_shuttle_exception: Optional[TransportationFreeAirportShuttleExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeAirportShuttleException') }})
    free_private_car_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freePrivateCarService') }})
    free_private_car_service_exception: Optional[TransportationFreePrivateCarServiceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freePrivateCarServiceException') }})
    local_shuttle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localShuttle') }})
    local_shuttle_exception: Optional[TransportationLocalShuttleExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localShuttleException') }})
    private_car_service: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateCarService') }})
    private_car_service_exception: Optional[TransportationPrivateCarServiceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateCarServiceException') }})
    transfer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    transfer_exception: Optional[TransportationTransferExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferException') }})
    
