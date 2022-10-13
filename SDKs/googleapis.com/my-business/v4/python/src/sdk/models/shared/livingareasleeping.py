from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LivingAreaSleepingBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingBunkBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingCribsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingDoubleBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingFeatherPillowsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingHypoallergenicBeddingExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingKingBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingMemoryFoamPillowsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingOtherBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingQueenBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingRollAwayBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingSofaBedsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class LivingAreaSleepingSyntheticPillowsExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class LivingAreaSleeping:
    beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bedsCount' }})
    beds_count_exception: Optional[LivingAreaSleepingBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bedsCountException' }})
    bunk_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bunkBedsCount' }})
    bunk_beds_count_exception: Optional[LivingAreaSleepingBunkBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bunkBedsCountException' }})
    cribs_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cribsCount' }})
    cribs_count_exception: Optional[LivingAreaSleepingCribsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cribsCountException' }})
    double_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleBedsCount' }})
    double_beds_count_exception: Optional[LivingAreaSleepingDoubleBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleBedsCountException' }})
    feather_pillows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featherPillows' }})
    feather_pillows_exception: Optional[LivingAreaSleepingFeatherPillowsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featherPillowsException' }})
    hypoallergenic_bedding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hypoallergenicBedding' }})
    hypoallergenic_bedding_exception: Optional[LivingAreaSleepingHypoallergenicBeddingExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hypoallergenicBeddingException' }})
    king_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kingBedsCount' }})
    king_beds_count_exception: Optional[LivingAreaSleepingKingBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kingBedsCountException' }})
    memory_foam_pillows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryFoamPillows' }})
    memory_foam_pillows_exception: Optional[LivingAreaSleepingMemoryFoamPillowsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryFoamPillowsException' }})
    other_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherBedsCount' }})
    other_beds_count_exception: Optional[LivingAreaSleepingOtherBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherBedsCountException' }})
    queen_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queenBedsCount' }})
    queen_beds_count_exception: Optional[LivingAreaSleepingQueenBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queenBedsCountException' }})
    roll_away_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollAwayBedsCount' }})
    roll_away_beds_count_exception: Optional[LivingAreaSleepingRollAwayBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollAwayBedsCountException' }})
    single_or_twin_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleOrTwinBedsCount' }})
    single_or_twin_beds_count_exception: Optional[LivingAreaSleepingSingleOrTwinBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'singleOrTwinBedsCountException' }})
    sofa_beds_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sofaBedsCount' }})
    sofa_beds_count_exception: Optional[LivingAreaSleepingSofaBedsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sofaBedsCountException' }})
    synthetic_pillows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntheticPillows' }})
    synthetic_pillows_exception: Optional[LivingAreaSleepingSyntheticPillowsExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'syntheticPillowsException' }})
    
