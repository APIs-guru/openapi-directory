from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import livingarea
from . import viewsfromunit

class GuestUnitFeaturesBungalowOrVillaExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesConnectingUnitAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesExecutiveFloorExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesMaxOccupantsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesPrivateHomeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesSuiteExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class GuestUnitFeaturesTierEnum(str, Enum):
    UNIT_TIER_UNSPECIFIED = "UNIT_TIER_UNSPECIFIED"
    STANDARD_UNIT = "STANDARD_UNIT"
    DELUXE_UNIT = "DELUXE_UNIT"

class GuestUnitFeaturesTierExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class GuestUnitFeatures:
    bungalow_or_villa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bungalowOrVilla' }})
    bungalow_or_villa_exception: Optional[GuestUnitFeaturesBungalowOrVillaExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bungalowOrVillaException' }})
    connecting_unit_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectingUnitAvailable' }})
    connecting_unit_available_exception: Optional[GuestUnitFeaturesConnectingUnitAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectingUnitAvailableException' }})
    executive_floor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executiveFloor' }})
    executive_floor_exception: Optional[GuestUnitFeaturesExecutiveFloorExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executiveFloorException' }})
    max_adult_occupants_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAdultOccupantsCount' }})
    max_adult_occupants_count_exception: Optional[GuestUnitFeaturesMaxAdultOccupantsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAdultOccupantsCountException' }})
    max_child_occupants_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxChildOccupantsCount' }})
    max_child_occupants_count_exception: Optional[GuestUnitFeaturesMaxChildOccupantsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxChildOccupantsCountException' }})
    max_occupants_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxOccupantsCount' }})
    max_occupants_count_exception: Optional[GuestUnitFeaturesMaxOccupantsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxOccupantsCountException' }})
    private_home: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateHome' }})
    private_home_exception: Optional[GuestUnitFeaturesPrivateHomeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateHomeException' }})
    suite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suite' }})
    suite_exception: Optional[GuestUnitFeaturesSuiteExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suiteException' }})
    tier: Optional[GuestUnitFeaturesTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    tier_exception: Optional[GuestUnitFeaturesTierExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tierException' }})
    total_living_areas: Optional[livingarea.LivingArea] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalLivingAreas' }})
    views: Optional[viewsfromunit.ViewsFromUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'views' }})
    
