from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WasteReductionCompostableFoodContainersAndCutleryExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionCompostsExcessFoodExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionDonatesExcessFoodExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionFoodWasteReductionProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionNoSingleUsePlasticStrawsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionNoStyrofoamFoodContainersExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionRecyclingProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionRefillableToiletryContainersExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionSafelyDisposesBatteriesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionSafelyDisposesElectronicsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionSafelyDisposesLightbulbsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionSoapDonationProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionToiletryDonationProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WasteReductionWaterBottleFillingStationsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class WasteReduction:
    compostable_food_containers_and_cutlery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compostableFoodContainersAndCutlery' }})
    compostable_food_containers_and_cutlery_exception: Optional[WasteReductionCompostableFoodContainersAndCutleryExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compostableFoodContainersAndCutleryException' }})
    composts_excess_food: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compostsExcessFood' }})
    composts_excess_food_exception: Optional[WasteReductionCompostsExcessFoodExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compostsExcessFoodException' }})
    donates_excess_food: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'donatesExcessFood' }})
    donates_excess_food_exception: Optional[WasteReductionDonatesExcessFoodExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'donatesExcessFoodException' }})
    food_waste_reduction_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foodWasteReductionProgram' }})
    food_waste_reduction_program_exception: Optional[WasteReductionFoodWasteReductionProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foodWasteReductionProgramException' }})
    no_single_use_plastic_straws: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noSingleUsePlasticStraws' }})
    no_single_use_plastic_straws_exception: Optional[WasteReductionNoSingleUsePlasticStrawsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noSingleUsePlasticStrawsException' }})
    no_single_use_plastic_water_bottles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noSingleUsePlasticWaterBottles' }})
    no_single_use_plastic_water_bottles_exception: Optional[WasteReductionNoSingleUsePlasticWaterBottlesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noSingleUsePlasticWaterBottlesException' }})
    no_styrofoam_food_containers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noStyrofoamFoodContainers' }})
    no_styrofoam_food_containers_exception: Optional[WasteReductionNoStyrofoamFoodContainersExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noStyrofoamFoodContainersException' }})
    recycling_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recyclingProgram' }})
    recycling_program_exception: Optional[WasteReductionRecyclingProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recyclingProgramException' }})
    refillable_toiletry_containers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refillableToiletryContainers' }})
    refillable_toiletry_containers_exception: Optional[WasteReductionRefillableToiletryContainersExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refillableToiletryContainersException' }})
    safely_disposes_batteries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyDisposesBatteries' }})
    safely_disposes_batteries_exception: Optional[WasteReductionSafelyDisposesBatteriesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyDisposesBatteriesException' }})
    safely_disposes_electronics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyDisposesElectronics' }})
    safely_disposes_electronics_exception: Optional[WasteReductionSafelyDisposesElectronicsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyDisposesElectronicsException' }})
    safely_disposes_lightbulbs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyDisposesLightbulbs' }})
    safely_disposes_lightbulbs_exception: Optional[WasteReductionSafelyDisposesLightbulbsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyDisposesLightbulbsException' }})
    safely_handles_hazardous_substances: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyHandlesHazardousSubstances' }})
    safely_handles_hazardous_substances_exception: Optional[WasteReductionSafelyHandlesHazardousSubstancesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'safelyHandlesHazardousSubstancesException' }})
    soap_donation_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soapDonationProgram' }})
    soap_donation_program_exception: Optional[WasteReductionSoapDonationProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'soapDonationProgramException' }})
    toiletry_donation_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toiletryDonationProgram' }})
    toiletry_donation_program_exception: Optional[WasteReductionToiletryDonationProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toiletryDonationProgramException' }})
    water_bottle_filling_stations: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterBottleFillingStations' }})
    water_bottle_filling_stations_exception: Optional[WasteReductionWaterBottleFillingStationsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterBottleFillingStationsException' }})
    
