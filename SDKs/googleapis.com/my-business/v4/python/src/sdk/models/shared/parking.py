from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ParkingElectricCarChargingStationsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ParkingFreeParkingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ParkingFreeSelfParkingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ParkingFreeValetParkingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ParkingParkingAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ParkingSelfParkingAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ParkingValetParkingAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Parking:
    electric_car_charging_stations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electricCarChargingStations' }})
    electric_car_charging_stations_exception: Optional[ParkingElectricCarChargingStationsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'electricCarChargingStationsException' }})
    free_parking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeParking' }})
    free_parking_exception: Optional[ParkingFreeParkingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeParkingException' }})
    free_self_parking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeSelfParking' }})
    free_self_parking_exception: Optional[ParkingFreeSelfParkingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeSelfParkingException' }})
    free_valet_parking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeValetParking' }})
    free_valet_parking_exception: Optional[ParkingFreeValetParkingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeValetParkingException' }})
    parking_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parkingAvailable' }})
    parking_available_exception: Optional[ParkingParkingAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parkingAvailableException' }})
    self_parking_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfParkingAvailable' }})
    self_parking_available_exception: Optional[ParkingSelfParkingAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfParkingAvailableException' }})
    valet_parking_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valetParkingAvailable' }})
    valet_parking_available_exception: Optional[ParkingValetParkingAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valetParkingAvailableException' }})
    
