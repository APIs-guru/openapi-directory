from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LivingAreaFeaturesAirConditioningExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesBathtubExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesBidetExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesDryerExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesElectronicRoomKeyExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesFireplaceExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesHairdryerExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesHeatingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesInunitSafeExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesInunitWifiAvailableExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesIroningEquipmentExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesPayPerViewMoviesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesPrivateBathroomExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesShowerExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesToiletExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesTvCastingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesTvExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesTvStreamingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaFeaturesWasherExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LivingAreaFeatures:
    r"""LivingAreaFeatures
    Features in the living area.
    """
    
    air_conditioning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airConditioning') }})
    air_conditioning_exception: Optional[LivingAreaFeaturesAirConditioningExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airConditioningException') }})
    bathtub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bathtub') }})
    bathtub_exception: Optional[LivingAreaFeaturesBathtubExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bathtubException') }})
    bidet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidet') }})
    bidet_exception: Optional[LivingAreaFeaturesBidetExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidetException') }})
    dryer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryer') }})
    dryer_exception: Optional[LivingAreaFeaturesDryerExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dryerException') }})
    electronic_room_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electronicRoomKey') }})
    electronic_room_key_exception: Optional[LivingAreaFeaturesElectronicRoomKeyExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('electronicRoomKeyException') }})
    fireplace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fireplace') }})
    fireplace_exception: Optional[LivingAreaFeaturesFireplaceExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fireplaceException') }})
    hairdryer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hairdryer') }})
    hairdryer_exception: Optional[LivingAreaFeaturesHairdryerExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hairdryerException') }})
    heating: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heating') }})
    heating_exception: Optional[LivingAreaFeaturesHeatingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heatingException') }})
    inunit_safe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inunitSafe') }})
    inunit_safe_exception: Optional[LivingAreaFeaturesInunitSafeExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inunitSafeException') }})
    inunit_wifi_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inunitWifiAvailable') }})
    inunit_wifi_available_exception: Optional[LivingAreaFeaturesInunitWifiAvailableExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inunitWifiAvailableException') }})
    ironing_equipment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ironingEquipment') }})
    ironing_equipment_exception: Optional[LivingAreaFeaturesIroningEquipmentExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ironingEquipmentException') }})
    pay_per_view_movies: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payPerViewMovies') }})
    pay_per_view_movies_exception: Optional[LivingAreaFeaturesPayPerViewMoviesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payPerViewMoviesException') }})
    private_bathroom: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateBathroom') }})
    private_bathroom_exception: Optional[LivingAreaFeaturesPrivateBathroomExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateBathroomException') }})
    shower: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shower') }})
    shower_exception: Optional[LivingAreaFeaturesShowerExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showerException') }})
    toilet: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toilet') }})
    toilet_exception: Optional[LivingAreaFeaturesToiletExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toiletException') }})
    tv: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tv') }})
    tv_casting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tvCasting') }})
    tv_casting_exception: Optional[LivingAreaFeaturesTvCastingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tvCastingException') }})
    tv_exception: Optional[LivingAreaFeaturesTvExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tvException') }})
    tv_streaming: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tvStreaming') }})
    tv_streaming_exception: Optional[LivingAreaFeaturesTvStreamingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tvStreamingException') }})
    universal_power_adapters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalPowerAdapters') }})
    universal_power_adapters_exception: Optional[LivingAreaFeaturesUniversalPowerAdaptersExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('universalPowerAdaptersException') }})
    washer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('washer') }})
    washer_exception: Optional[LivingAreaFeaturesWasherExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('washerException') }})
    
