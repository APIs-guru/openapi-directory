from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WaterConservationLinenReuseProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WaterConservationTowelReuseProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WaterConservationWaterSavingShowersExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WaterConservationWaterSavingSinksExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WaterConservationWaterSavingToiletsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class WaterConservation:
    independent_organization_audits_water_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'independentOrganizationAuditsWaterUse' }})
    independent_organization_audits_water_use_exception: Optional[WaterConservationIndependentOrganizationAuditsWaterUseExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'independentOrganizationAuditsWaterUseException' }})
    linen_reuse_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linenReuseProgram' }})
    linen_reuse_program_exception: Optional[WaterConservationLinenReuseProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linenReuseProgramException' }})
    towel_reuse_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'towelReuseProgram' }})
    towel_reuse_program_exception: Optional[WaterConservationTowelReuseProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'towelReuseProgramException' }})
    water_saving_showers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSavingShowers' }})
    water_saving_showers_exception: Optional[WaterConservationWaterSavingShowersExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSavingShowersException' }})
    water_saving_sinks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSavingSinks' }})
    water_saving_sinks_exception: Optional[WaterConservationWaterSavingSinksExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSavingSinksException' }})
    water_saving_toilets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSavingToilets' }})
    water_saving_toilets_exception: Optional[WaterConservationWaterSavingToiletsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterSavingToiletsException' }})
    
