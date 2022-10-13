from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ActivitiesBeachAccessExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesBeachFrontExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesBicycleRentalExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesBoutiqueStoresExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesCasinoExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesFreeBicycleRentalExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesFreeWatercraftRentalExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesGameRoomExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesGolfExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesHorsebackRidingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesNightclubExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesPrivateBeachExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesScubaExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesSnorkelingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesTennisExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesWaterSkiingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class ActivitiesWatercraftRentalExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Activities:
    beach_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beachAccess' }})
    beach_access_exception: Optional[ActivitiesBeachAccessExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beachAccessException' }})
    beach_front: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beachFront' }})
    beach_front_exception: Optional[ActivitiesBeachFrontExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beachFrontException' }})
    bicycle_rental: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bicycleRental' }})
    bicycle_rental_exception: Optional[ActivitiesBicycleRentalExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bicycleRentalException' }})
    boutique_stores: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boutiqueStores' }})
    boutique_stores_exception: Optional[ActivitiesBoutiqueStoresExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boutiqueStoresException' }})
    casino: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'casino' }})
    casino_exception: Optional[ActivitiesCasinoExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'casinoException' }})
    free_bicycle_rental: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBicycleRental' }})
    free_bicycle_rental_exception: Optional[ActivitiesFreeBicycleRentalExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeBicycleRentalException' }})
    free_watercraft_rental: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeWatercraftRental' }})
    free_watercraft_rental_exception: Optional[ActivitiesFreeWatercraftRentalExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeWatercraftRentalException' }})
    game_room: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gameRoom' }})
    game_room_exception: Optional[ActivitiesGameRoomExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gameRoomException' }})
    golf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'golf' }})
    golf_exception: Optional[ActivitiesGolfExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'golfException' }})
    horseback_riding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horsebackRiding' }})
    horseback_riding_exception: Optional[ActivitiesHorsebackRidingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'horsebackRidingException' }})
    nightclub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nightclub' }})
    nightclub_exception: Optional[ActivitiesNightclubExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nightclubException' }})
    private_beach: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateBeach' }})
    private_beach_exception: Optional[ActivitiesPrivateBeachExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateBeachException' }})
    scuba: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scuba' }})
    scuba_exception: Optional[ActivitiesScubaExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scubaException' }})
    snorkeling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snorkeling' }})
    snorkeling_exception: Optional[ActivitiesSnorkelingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snorkelingException' }})
    tennis: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tennis' }})
    tennis_exception: Optional[ActivitiesTennisExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tennisException' }})
    water_skiing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSkiing' }})
    water_skiing_exception: Optional[ActivitiesWaterSkiingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSkiingException' }})
    watercraft_rental: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watercraftRental' }})
    watercraft_rental_exception: Optional[ActivitiesWatercraftRentalExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'watercraftRentalException' }})
    
