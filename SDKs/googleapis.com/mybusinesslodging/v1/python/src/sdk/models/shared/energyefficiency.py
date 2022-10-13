from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergyConservationProgramExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergyEfficientLightingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyEnergySavingThermostatsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyGreenBuildingDesignExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class EnergyEfficiency:
    carbon_free_energy_sources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carbonFreeEnergySources' }})
    carbon_free_energy_sources_exception: Optional[EnergyEfficiencyCarbonFreeEnergySourcesExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carbonFreeEnergySourcesException' }})
    energy_conservation_program: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyConservationProgram' }})
    energy_conservation_program_exception: Optional[EnergyEfficiencyEnergyConservationProgramExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyConservationProgramException' }})
    energy_efficient_heating_and_cooling_systems: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficientHeatingAndCoolingSystems' }})
    energy_efficient_heating_and_cooling_systems_exception: Optional[EnergyEfficiencyEnergyEfficientHeatingAndCoolingSystemsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficientHeatingAndCoolingSystemsException' }})
    energy_efficient_lighting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficientLighting' }})
    energy_efficient_lighting_exception: Optional[EnergyEfficiencyEnergyEfficientLightingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficientLightingException' }})
    energy_saving_thermostats: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energySavingThermostats' }})
    energy_saving_thermostats_exception: Optional[EnergyEfficiencyEnergySavingThermostatsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energySavingThermostatsException' }})
    green_building_design: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greenBuildingDesign' }})
    green_building_design_exception: Optional[EnergyEfficiencyGreenBuildingDesignExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'greenBuildingDesignException' }})
    independent_organization_audits_energy_use: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'independentOrganizationAuditsEnergyUse' }})
    independent_organization_audits_energy_use_exception: Optional[EnergyEfficiencyIndependentOrganizationAuditsEnergyUseExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'independentOrganizationAuditsEnergyUseException' }})
    
