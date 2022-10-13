from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LivingAreaEatingCoffeeMakerExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingCookwareExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingDishwasherExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingIndoorGrillExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingKettleExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingKitchenAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingMicrowaveExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingMinibarExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingOutdoorGrillExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingOvenExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingRefrigeratorExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingSinkExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingSnackbarExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingStoveExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingTeaStationExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaEatingToasterExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LivingAreaEating:
    coffee_maker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coffeeMaker' }})
    coffee_maker_exception: Optional[LivingAreaEatingCoffeeMakerExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coffeeMakerException' }})
    cookware: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookware' }})
    cookware_exception: Optional[LivingAreaEatingCookwareExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cookwareException' }})
    dishwasher: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dishwasher' }})
    dishwasher_exception: Optional[LivingAreaEatingDishwasherExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dishwasherException' }})
    indoor_grill: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorGrill' }})
    indoor_grill_exception: Optional[LivingAreaEatingIndoorGrillExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorGrillException' }})
    kettle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kettle' }})
    kettle_exception: Optional[LivingAreaEatingKettleExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kettleException' }})
    kitchen_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kitchenAvailable' }})
    kitchen_available_exception: Optional[LivingAreaEatingKitchenAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kitchenAvailableException' }})
    microwave: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microwave' }})
    microwave_exception: Optional[LivingAreaEatingMicrowaveExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'microwaveException' }})
    minibar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minibar' }})
    minibar_exception: Optional[LivingAreaEatingMinibarExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minibarException' }})
    outdoor_grill: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdoorGrill' }})
    outdoor_grill_exception: Optional[LivingAreaEatingOutdoorGrillExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdoorGrillException' }})
    oven: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oven' }})
    oven_exception: Optional[LivingAreaEatingOvenExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ovenException' }})
    refrigerator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refrigerator' }})
    refrigerator_exception: Optional[LivingAreaEatingRefrigeratorExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refrigeratorException' }})
    sink: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sink' }})
    sink_exception: Optional[LivingAreaEatingSinkExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sinkException' }})
    snackbar: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snackbar' }})
    snackbar_exception: Optional[LivingAreaEatingSnackbarExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snackbarException' }})
    stove: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stove' }})
    stove_exception: Optional[LivingAreaEatingStoveExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stoveException' }})
    tea_station: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teaStation' }})
    tea_station_exception: Optional[LivingAreaEatingTeaStationExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teaStationException' }})
    toaster: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toaster' }})
    toaster_exception: Optional[LivingAreaEatingToasterExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toasterException' }})
    
