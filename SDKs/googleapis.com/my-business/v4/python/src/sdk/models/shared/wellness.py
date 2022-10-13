from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WellnessDoctorOnCallExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessEllipticalMachineExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessFitnessCenterExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessFreeFitnessCenterExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessFreeWeightsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessMassageExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessSalonExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessSaunaExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessSpaExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessTreadmillExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class WellnessWeightMachineExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Wellness:
    doctor_on_call: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doctorOnCall' }})
    doctor_on_call_exception: Optional[WellnessDoctorOnCallExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doctorOnCallException' }})
    elliptical_machine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ellipticalMachine' }})
    elliptical_machine_exception: Optional[WellnessEllipticalMachineExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ellipticalMachineException' }})
    fitness_center: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fitnessCenter' }})
    fitness_center_exception: Optional[WellnessFitnessCenterExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fitnessCenterException' }})
    free_fitness_center: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeFitnessCenter' }})
    free_fitness_center_exception: Optional[WellnessFreeFitnessCenterExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeFitnessCenterException' }})
    free_weights: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeWeights' }})
    free_weights_exception: Optional[WellnessFreeWeightsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeWeightsException' }})
    massage: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'massage' }})
    massage_exception: Optional[WellnessMassageExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'massageException' }})
    salon: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salon' }})
    salon_exception: Optional[WellnessSalonExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salonException' }})
    sauna: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sauna' }})
    sauna_exception: Optional[WellnessSaunaExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saunaException' }})
    spa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spa' }})
    spa_exception: Optional[WellnessSpaExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaException' }})
    treadmill: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treadmill' }})
    treadmill_exception: Optional[WellnessTreadmillExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'treadmillException' }})
    weight_machine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightMachine' }})
    weight_machine_exception: Optional[WellnessWeightMachineExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightMachineException' }})
    
