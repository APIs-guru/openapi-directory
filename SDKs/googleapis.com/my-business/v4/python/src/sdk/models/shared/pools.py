from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PoolsAdultPoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsHotTubExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsIndoorPoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsIndoorPoolsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsLazyRiverExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsLifeguardExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsOutdoorPoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsOutdoorPoolsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsPoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsPoolsCountExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsWadingPoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsWaterParkExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsWaterslideExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"

class PoolsWavePoolExceptionEnum(str, Enum):
    EXCEPTION_UNSPECIFIED = "EXCEPTION_UNSPECIFIED"
    UNDER_CONSTRUCTION = "UNDER_CONSTRUCTION"
    DEPENDENT_ON_SEASON = "DEPENDENT_ON_SEASON"
    DEPENDENT_ON_DAY_OF_WEEK = "DEPENDENT_ON_DAY_OF_WEEK"


@dataclass_json
@dataclass
class Pools:
    adult_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adultPool' }})
    adult_pool_exception: Optional[PoolsAdultPoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adultPoolException' }})
    hot_tub: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotTub' }})
    hot_tub_exception: Optional[PoolsHotTubExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotTubException' }})
    indoor_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorPool' }})
    indoor_pool_exception: Optional[PoolsIndoorPoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorPoolException' }})
    indoor_pools_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorPoolsCount' }})
    indoor_pools_count_exception: Optional[PoolsIndoorPoolsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indoorPoolsCountException' }})
    lazy_river: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lazyRiver' }})
    lazy_river_exception: Optional[PoolsLazyRiverExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lazyRiverException' }})
    lifeguard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifeguard' }})
    lifeguard_exception: Optional[PoolsLifeguardExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lifeguardException' }})
    outdoor_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdoorPool' }})
    outdoor_pool_exception: Optional[PoolsOutdoorPoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdoorPoolException' }})
    outdoor_pools_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdoorPoolsCount' }})
    outdoor_pools_count_exception: Optional[PoolsOutdoorPoolsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outdoorPoolsCountException' }})
    pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pool' }})
    pool_exception: Optional[PoolsPoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poolException' }})
    pools_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poolsCount' }})
    pools_count_exception: Optional[PoolsPoolsCountExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poolsCountException' }})
    wading_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wadingPool' }})
    wading_pool_exception: Optional[PoolsWadingPoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wadingPoolException' }})
    water_park: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterPark' }})
    water_park_exception: Optional[PoolsWaterParkExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterParkException' }})
    waterslide: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterslide' }})
    waterslide_exception: Optional[PoolsWaterslideExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waterslideException' }})
    wave_pool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wavePool' }})
    wave_pool_exception: Optional[PoolsWavePoolExceptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wavePoolException' }})
    
